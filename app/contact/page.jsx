import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="sm:w-[30px] sm:h-[2px] w-[30%]  bg-primary"></span>
              Say Hello!
            </div>
            <h1 className="text-4xl sm:text-8xl font-semibold tracking-[-2px] xl:leading-[90px] mb-8 text-center sm:text-left ">
              Let's Work together.
            </h1>
            <p className="subtitle max-w-[400px] text-center sm:text-left">
              Feel free to reach out for collaborations, inquiries or just to
              say hello! I'm always open to new opportunities and excited to
              connect with you.
            </p>
          </div>
          {/* illustrations */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>tayyabcheemadev@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Phalia, Mandi-Baha-Uddin Pakistan</div>
            </div>
            {/* Phone Number */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+92 309 2867068</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
