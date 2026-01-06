import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function clean(input, maxLen){
  return String(input ?? "").trim().slice(0, maxLen);
}

export async function POST(req){
  try{
    const body = await req.json();

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 160);
    const address = clean(body.address, 220);
    const message = clean(body.message, 1500);
    const sourcePage = clean(body.sourcePage, 200);

    if(!name || !phone || !address){
      return NextResponse.json({ ok:false, error:"Missing required fields." }, { status:400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEADS_TO_EMAIL;
    const fromEmail = process.env.LEADS_FROM_EMAIL;

    if(!resendKey || !toEmail || !fromEmail){
      return NextResponse.json({ ok:false, error:"Server email config is missing." }, { status:500 });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: `Durbin Estate Agents <${fromEmail}>`,
      to: [toEmail],
      subject: `New enquiry: ${name} (${address})`,
      text: [
        "New Lead Submitted",
        "-------------------",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "(not provided)"}`,
        `Address/Postcode: ${address}`,
        `Message: ${message || "(none)"}`,
        `Source page: ${sourcePage || "(unknown)"}`
      ].join("\n"),
      replyTo: email || undefined
    });

    if(email){
      await resend.emails.send({
        from: `Durbin Estate Agents <${fromEmail}>`,
        to: [email],
        subject: "Thanks for your enquiry – Durbin Estate Agents",
        text: [
          `Hi ${name},`,
          "",
          "Thanks for getting in touch with Durbin Estate Agents.",
          "",
          "We’ve received your enquiry regarding:",
          address,
          "",
          "A member of our team will contact you shortly to discuss next steps.",
          "",
          "Kind regards,",
          "Durbin Estate Agents",
          "Aberdare & Mountain Ash"
        ].join("\n")
      });
    }

    return NextResponse.json({ ok:true });
  }catch{
    return NextResponse.json({ ok:false, error:"Invalid request." }, { status:400 });
  }
}
