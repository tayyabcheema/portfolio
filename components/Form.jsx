"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const Form = () => {
  const formref = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending.......");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formref.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => setStatus("Email Sent Successfully! ✅ "),
        (error) => {
          console.log(error);
          setStatus("Failed to Send Email! ❌");
        }
      );
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form
      ref={formref}
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4"
    >
      {/* Input Name */}
      <div className="relative flex items-center">
        <Input
          type="name"
          name="user_name"
          id="name"
          placeholder="Name"
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input Email */}
      <div className="relative flex items-center">
        <Input
          type="email"
          name="user_email"
          id="email"
          placeholder="Email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Input Message */}
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Message" required />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        className="flex sm:items-center gap-x-1 sm:max-w-[166px]"
      >
        Let's talk <ArrowRightIcon size={20} />{" "}
      </Button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
};

export default Form;
