"use client";

import { useState, useRef, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./Contact.css";

const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string;

type Status = "idle" | "submitting" | "success" | "error";

function Contact() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState(searchParams?.get("message") ?? "");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaWarning, setCaptchaWarning] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaWarning(true);
      return;
    }

    const form = e.currentTarget;
    const payload = {
      access_key: WEB3FORMS_KEY,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      "h-captcha-response": captchaToken,
    };

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("");
        formRef.current?.reset();
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setStatus("error");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch {
      setStatus("error");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  }

  return (
    <>
      <section className="section section--page-hero">
        <div className="container contact-layout">
          <div className="contact-info">
            <h1 className="section-title">Talk to the People Who Build It</h1>
            <p className="section-subtitle">
              Questions, demos, or orders. We're here to help.
            </p>
            <p>
              Whether you want to schedule a demo, ask a technical question,
              or place an order, you'll reach the people who actually build
              Trailer Dr., not a call center. Use the form or reach us
              directly below.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <h4>Email Bruce directly</h4>
                <a href="mailto:bruce.trailerdr@gmail.com">bruce.trailerdr@gmail.com</a>
              </div>
              <div className="contact-detail">
                <h4>Phone</h4>
                <a href="tel:+12072314967">(207) 231-4967</a>
              </div>
              <div className="contact-detail">
                <h4>Made in the USA</h4>
                <p>Manufactured in Maine</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {status === "success" ? (
              <div className="contact-success">
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you as soon as possible. You can also call us directly at <a href="tel:+12072314967">(207) 231-4967</a>.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                className="contact-form"
                onSubmit={handleSubmit}
              >
                {status === "error" && (
                  <p className="contact-error">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <div className="form-field">
                  <input type="text" id="name" name="name" placeholder=" " required />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-field">
                  <input type="email" id="email" name="email" placeholder=" " required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-field form-field--textarea">
                  <textarea id="message" name="message" rows={6} placeholder=" " required value={message} onChange={(e) => setMessage(e.target.value)} />
                  <label htmlFor="message">Message</label>
                </div>
                <div className="form-field">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={HCAPTCHA_SITE_KEY}
                    reCaptchaCompat={false}
                    onVerify={(token) => { setCaptchaToken(token); setCaptchaWarning(false); }}
                    onExpire={() => setCaptchaToken(null)}
                  />
                </div>
                {captchaWarning && (
                  <p className="contact-error">
                    Please confirm you are not a robot before submitting.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
