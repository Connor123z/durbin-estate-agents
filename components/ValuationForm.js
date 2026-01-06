"use client";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ValuationForm(){
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errorMsg, setErrorMsg] = useState("");

  const buttonText = useMemo(() => {
    if (status === "sending") return "Sending...";
    if (status === "error") return "Try Again";
    return "Send Enquiry";
  }, [status]);

  async function onSubmit(e){
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      message: String(fd.get("message") || ""),
      sourcePage: pathname
    };

    try{
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(!data.ok){
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }
      e.currentTarget.reset();
      router.push("/thank-you");
    }catch{
      setStatus("error");
      setErrorMsg("Network error — please try again.");
    }finally{
      setStatus("idle");
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label>Name<input required name="name" autoComplete="name" /></label>
      <label>Phone<input required name="phone" autoComplete="tel" /></label>
      <label>Email (optional)<input name="email" autoComplete="email" /></label>
      <label>Property Address / Postcode<input required name="address" autoComplete="street-address" /></label>
      <label>Message (optional)<textarea name="message" rows={4} /></label>
      <button className="btnPrimary" disabled={status==="sending"} type="submit">{buttonText}</button>
      {status==="error" ? <p className="fineprint" style={{marginTop:8}}>{errorMsg}</p> : null}
    </form>
  );
}
