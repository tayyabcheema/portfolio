"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper React component

import { Swiper, SwiperSlide } from "swiper/react";

// Importing swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Importing required Modules
import { Pagination } from "swiper/modules";

// Importing components
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    image: "/work/portfolio.png",
    category: "next js",
    name: "Portfolio",
    description:
      "Explore my portfolio website to see my work as a MERN stack developer, showcasing projects that blend creativity with technical expertise.",
    link: "https://tayyabcheema-portfolio.vercel.app/",
    github: "https://github.com/tayyabcheema/portfolio",
  },

  {
    image: "/work/lifeflow.png",
    category: "full stack",
    name: "Lifeflow",
    description:
      "Lifeflow is a blood management system for tracking stock, scheduling donations, and managing appointments efficiently.",
    link: "https://lifeflow-frontend-client.vercel.app/",
    github: "https://github.com/tayyabcheema/Lifeflow-FYP",
  },
  {
    image: "/work/booking.png",
    category: "react js",
    name: "Hotel Reservation",
    description:
      "Hotel reservation website for users to easily search, compare, and book rooms with real-time availability and secure payments.",
    link: "https://impala.travel/",
    github: "https://github.com/tayyabcheema/Hotel-Reservation",
  },
  {
    image: "/work/shopsy.png",
    category: "react js",
    name: "Shopsy",
    description:
      "Shopsy an online shopping website that allows users to browse, compare, and purchase products easily with a secure checkout process",
    link: "https://www.onlineshopsy.in/",
    github: "/",
  },
  {
    image: "/work/real_estate.png",
    category: "next js",
    name: "Real Estate",
    description:
      "Real Estate website that enables users to search, compare, and inquire about properties, providing detailed options.",
    link: "https://maahomes.in",
    github: "/",
  },
  {
    image: "/work/admin.png",
    category: "react js",
    name: "Admin Dashboard",
    description:
      "Admin dashboard providing a comprehensive interface to manage blood stock, monitor donations, and oversee appointments.",
    link: "/",
    github: "https://github.com/tayyabcheema/AWD-Project",
  },
  {
    image: "/work/nexa.png",
    category: "next js",
    name: "Nexa Learn",
    description:
      "Platform that allows users to explore, enroll in, and track their learning progress with interactive course materials and assessments.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Texts */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Check out my recent work, featuring a variety of web applications
            that highlight my skills in creating effective and user-friendly
            solutions.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className=" sm:h-[520px] h-[570px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the 1st 4 projects for the slides */}
            {ProjectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
