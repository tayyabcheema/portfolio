"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import Swiper React component

import { Swiper, SwiperSlide } from "swiper/react";

// Importing swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Importing required Modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-7.png",
    name: "Aqeel Tariq",
    job: "Senior Software Engineer",
    review:
      "Working with Tayyab has been a game-changer for my projects. He’s not only technically proficient but also great at understanding requirements and translating them into efficient, user-friendly applications.",
  },
  {
    avatar: "/reviews/avatar-8.png",
    name: "Alex Fernandez",
    job: "Software Development Consultant",
    review:
      "Tayyab consistently delivers top-notch code and innovative solutions. His expertise in full stack development, especially on the backend, has been invaluable to our projects. He’s a reliable team player who always goes the extra mile.",
  },
  {
    avatar: "/reviews/avatar-9.png",
    name: "Sophie Martin",
    job: "UX/UI Designer",
    review:
      "Tayyab’s collaboration on our projects has been outstanding. His ability to integrate complex backend systems with intuitive, seamless frontend designs has resulted in highly successful products. He’s a true asset to any projects.",
  },
  {
    avatar: "/reviews/avatar-10.png",
    name: "Ahmed Yusuf",
    job: "Full Stack Developer",
    review:
      "Tayyab’s expertise in backend development is second to none. He has an exceptional ability to streamline processes and optimize performance. His work has consistently improved my application’s reliability and speed.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="sm:h-[400px] h-[450px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
