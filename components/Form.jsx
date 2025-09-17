"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Phone,
} from "lucide-react";
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
        () => {
          setStatus("Email Sent Successfully! ✅ ");
          formref.current.reset(); // ✅ Clear form after success
        },
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
          type="text"
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

      {/* Action Buttons */}
      <div className="flex gap-x-2 sm:max-w-[340px]">
        {/* Submit Button */}
        <Button
          type="submit"
          className="flex items-center gap-x-1 w-full sm:w-auto"
        >
          Let's talk <ArrowRightIcon size={20} />
        </Button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923092867068?text=Hi%20I%20want%20to%20talk%20with%20you"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            type="button"
            className="flex items-center gap-x-1 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white"
          >
            WhatsApp <Phone size={20} />
          </Button>
        </a>
      </div>

      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
};

export default Form;
