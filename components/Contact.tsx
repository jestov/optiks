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
      required: false,
      placeholder: "Your message!",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a40fbdea-5dff-4265-b353-66e062bbdc86",
        name: e.target.name.value,
        email: e.target.email.value,
        company: e.target.company.value,
        message: e.target.message.value,
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
        Thanks for your message! We'll reply you soon!
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
              rows="4"
              placeholder={field.placeholder}
              className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[18px] bg-white bg-opacity-0 focus:bg-opacity-10 border border-white border-opacity-15 resize-none focus:border-opacity-20 tracking-wide text-white placeholder-white !outline-none hover:bg-opacity-5"
            ></textarea>
          ) : field.type === "select" ? (
            <div className="relative">
              <select
                name={field.id}
                required={field.required}
                className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[18px] bg-white bg-opacity-0 focus:bg-opacity-10 border border-white border-opacity-15 focus:border-opacity-20 tracking-wide !outline-none text-white appearance-none hover:bg-opacity-5"
              >
                <option value="" disabled selected>
                  {field.placeholder}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
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
        className="flex justify-between items-center gap-12 px-5 md:px-6 py-4 md:py-5 min-w-1/3 rounded-full cursor-pointer bg-greenLighter text-secondary transition duration-500"
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
