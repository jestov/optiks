"use client";

import { useState } from "react";
import ArrowSmallIcon from "./icons/ArrowSmallIcon";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const fields = [
    {
      id: "name",
      type: "text",
      required: true,
      placeholder: "Full Name*",
    },
    { id: "company", type: "text", required: true, placeholder: "Company*" },
    {
      id: "email",
      type: "email",
      required: true,
      placeholder: "E-mail*",
    },
    {
      id: "message",
      type: "textarea",
      required: true,
      placeholder: "Your message*",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a40fbdea-5dff-4265-b353-66e062bbdc86",
        name: form.name.valueOf,
        email: form.email.valueOf,
        company: form.company.valueOf,
        message: form.message.valueOf,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 30000);
    }
  }

  if (formSubmitted) {
    return (
      <div className="py-5 text-2xl text-white" role="alert">
        Thanks for your message! We&apos;ll reply to you soon!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        formSubmitted
          ? "hidden"
          : "flex flex-col gap-4 md:gap-6 w-full items-start relative z-10"
      }
    >
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-4 w-full">
          {field.type === "textarea" ? (
            <textarea
              name={field.id}
              required={field.required}
              rows={4}
              placeholder={field.placeholder}
              className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[18px] bg-white bg-opacity-0 focus:bg-opacity-10 border border-white border-opacity-15 resize-none focus:border-opacity-20 tracking-wide text-white placeholder-white !outline-none hover:bg-opacity-5"
            ></textarea>
          ) : (
            <input
              type={field.type}
              name={field.id}
              required={field.required}
              placeholder={field.placeholder}
              className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[18px] bg-white bg-opacity-0 focus:bg-opacity-10 border border-white border-opacity-15 focus:border-opacity-20 tracking-wide text-white placeholder-white !outline-none hover:bg-opacity-5"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="flex justify-between items-center gap-12 px-5 md:px-6 py-4 md:py-5 min-w-1/3 rounded-full cursor-pointer bg-greenLighter hover:bg-greenLight text-secondary transition duration-500"
      >
        <div>Send Message</div>
        <span className="inline-block ml-2">
          <ArrowSmallIcon />
        </span>
      </button>
    </form>
  );
}

export default Contact;
