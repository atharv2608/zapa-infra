"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/assets/featured-projects/Picture2.png"
import image2 from "@/assets/featured-projects/Picture1.png"
import image3 from "@/assets/featured-projects/Picture3.png"
import image4 from "@/assets/featured-projects/Picture4.png"
const featuredProjects = [
  {
    id: 1,
    name: "Darling Harbour Ferry & Visitors Marina,",
    location: "Sydney. (Completed 1999)",
    materials: "",
    caption: "",
    image: image1,
  },
  {
    id: 2,
    name: "Port Coogee Marina",
    location: "Western Australia",
    materials: "",
    caption: "",
    image: image2,
  },
  {
    id: 3,
    name: "The Barrage, Marina Bay", 
    location: "Singapore",
    materials: "",
    caption: "",
    image: image3
  },
  {
    id: 4,
    name: "Cronulla Marina,", 
    location: "Sydney, Australia",
    materials: "",
    caption: "",
    image: image4
  },
];

export default function FeaturedProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex-[0_0_100%] min-w-0">
              <div className="grid md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-full md:h-full">
                <div className="relative w-full h-full">
  <img
    src={project.image || "/placeholder.svg"}
    alt={project.name}
    className=" inset-0 w-full h-full object-cover"
  />
</div>

                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.materials}</p>
                  <p className="text-lg font-semibold text-green-600">{project.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition duration-300"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition duration-300"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
