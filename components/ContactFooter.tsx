"use client";

import { useState } from "react";
import ArrowSmallIcon from "./icons/ArrowSmallIcon";

function ContactFooter() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const fields = [
    {
      id: "email",
      type: "email",
      required: true,
      placeholder: "E-mail*",
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
        email: form.email.valueOf,
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
        Thanks for your message! We`&apos;`ll reply to you soon!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        formSubmitted
          ? "hidden"
          : "flex flex-col md:flex-row w-full relative z-10 md:min-w-[980px] max-w-5xl items-center bg-secondary p-10 md:p-12 gap-6 md:gap-0 rounded-[32px]"
      }
    >
      <div className="w-full flex flex-col gap-2 md:mr-8">
        <h4 className="text-2xl md:text-3xl">
          Ready to grow the value of your company?
        </h4>
        <p className="text-base !leading-snug">
          <span className="text-greenLighter">Unlock exclusive insights</span>{" "}
          by contacting our sales team.
        </p>
      </div>
      {fields.map((field) => (
        <div key={field.id} className="flex gap-0 md:gap-2 w-full">
          <input
            type={field.type}
            name={field.id}
            required={field.required}
            placeholder={field.placeholder}
            className="w-full px-5 md:px-6 py-4 md:py-5 rounded-full md:rounded-r-none bg-white bg-opacity-0 focus:bg-opacity-10 border border-white border-opacity-15 focus:border-opacity-20 tracking-wide text-white placeholder-white !outline-none hover:bg-opacity-5"
          />
        </div>
      ))}
      <button
        type="submit"
        className="min-w-[180px] -mt-2 flex justify-between items-center gap-1.5 px-5 md:px-5.5 py-4 md:py-5 rounded-full md:rounded-l-none cursor-pointer bg-greenLighter text-secondary transition duration-500"
      >
        <div>Contact Sales</div>
        <span className="inline-block">
          <ArrowSmallIcon />
        </span>
      </button>
    </form>
  );
}

export default ContactFooter;
