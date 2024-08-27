"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { CardContent } from "@/components/ui/card";

const ProjectData = [
  
  {
    image: "/work/portfolio.png",
    category: "next js",
    name: "Portfolio",
    description:
      "Explore my portfolio website to see my work as a MERN stack developer, showcasing projects with technical expertise.",
    link: "/",
    github: "https://github.com/tayyabcheema/portfolio",
  },
  
  {
    image: "/work/lifeflow.png",
    category: "full stack",
    name: "Lifeflow",
    description:
      "Lifeflow is a blood management system for tracking stock, scheduling donations, and managing appointments efficiently.",
    link: "/",
    github: "https://github.com/tayyabcheema/Lifeflow-FYP",
  },
  {
    image: "/work/booking.png",
    category: "react js",
    name: "Hotel Reservation",
    description:
      "Hotel reservation website for users to easily search, compare, and book rooms with real-time availability and secure payments.",
    link: "/",
    github: "https://github.com/tayyabcheema/Hotel-Reservation",
  },
  {
    image: "/work/shopsy.png",
    category: "react js",
    name: "Shopsy",
    description:
      "Shopsy an online shopping website that allows users to browse, compare, and purchase products easily.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/real_estate.png",
    category: "next js",
    name: "Real Estate",
    description:
      "Real Estate website that enables users to search, compare, and inquire about properties, providing detailed options.",
    link: "/",
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

// Filtered Projects

// Remove categories duplicates

const uniquecategories = [
  "all projects",
  ...new Set(ProjectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniquecategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = ProjectData.filter((project) => {
    // If category is all projects
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                  value={category}
                  key={index}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
