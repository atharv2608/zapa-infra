"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    name: "Skyline Tower",
    location: "New York City",
    materials: "High-strength concrete, Waterproofing membranes",
    image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Reaching New Heights with Uncompromising Quality",
  },
  {
    id: 2,
    name: "Coastal Resort",
    location: "Miami Beach",
    materials: "Salt-resistant cement, Eco-friendly insulation",
    image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Green Valley Bridge",
    location: "Colorado",
    materials: "High-performance concrete, Corrosion-resistant reinforcement",
    image: "https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Connecting Communities, Defying Nature",
  },
];

export default function ProjectCarousel() {
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
              <div className="relative h-[60vh] min-h-[400px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />

                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="mb-2">{project.location}</p>
                  <p className="mb-4">{project.materials}</p>
                  <p className="text-lg font-semibold">{project.caption}</p>
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
