import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownLine,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 sm:h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full-Stack Developer
            </div>
            <h1 className="sm:text-6xl text-4xl leading-[45px] font-bold sm:leading-[65px] sm:tracking-[-2px] mb-6">
              Hello, My name is Tayyab Cheema
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Backend-focused full stack developer specializing in robust,
              scalable applications with seamless performance.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1V0--1Tn75xdj1oLYhS_x6_tzGY7hfm4c/view?usp=drive_link"
                target="_blank"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all "
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative ">
            {/* Badge */}
            <Badge
              conatainerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Year Of Experience"
            />
            {/* Badge 2 */}
            <Badge
              conatainerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              badgeText="Finished Projects"
            />
            {/* Badge 3 */}
            <Badge
              conatainerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={3}
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/dev-1.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-6 animate-bounce">
          <RiArrowDownLine className="text-2xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
