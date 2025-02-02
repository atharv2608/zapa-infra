"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import adelaide1 from "../../assets/projects/port-adelaide/picture1.webp"
import adelaide2 from "../../assets/projects/port-adelaide/picture2.webp"
import adelaide3 from "../../assets/projects/port-adelaide/picture3.webp"
import adelaide4 from "../../assets/projects/port-adelaide/picture4.webp"
import adelaide5 from "../../assets/projects/port-adelaide/picture5.webp"
import marineComplex1 from "../../assets/projects/australian-marine-complex/picture1.webp"
import marineComplex2 from "../../assets/projects/australian-marine-complex/picture2.webp"
import marineComplex3 from "../../assets/projects/australian-marine-complex/picture3.webp"

import esso1 from "../../assets/projects/esso-port/picture1.webp"
import esso2 from "../../assets/projects/esso-port/picture2.webp"
import busselton1 from "../../assets/projects/busselton-jetty/picture1.webp"

import dam1 from "../../assets/projects/dams/anathode-dam.webp"
import dam2 from "../../assets/projects/dams/myntdu-leksha-dam.webp"
import dam3 from "../../assets/projects/dams/nathpa-dam.webp"
import dam4 from "../../assets/projects/dams/rihand-dam.webp"

type Project ={
    id: number
    name: string
    description: string
    images: string[]
}
export const projects = [
    {
        id: 1,
        name: "Dam Rehabilitation and Improvement Project",
        description:
            "The Dam Rehabilitation and Improvement Project (DRIP) at Rihand Dam (Uttar Pradesh), Nathpa Jhakri Dam (Himachal Pradesh), Myntdu Leshka Dam (Meghalaya), and Anathode Dam (Kerala) focuses on structural repairs, flood resilience, hydro-mechanical upgrades, and safety enhancements to ensure long-term stability and efficient water management.",
        images: [dam1, dam2, dam3, dam4],
    },
    {
        id: 2,
        name: "Port Adelaide Berth 8, South Australia",
        description:
            "A 30-story residential complex featuring our premium waterproofing solutions and eco-friendly insulation materials. This project showcases our commitment to sustainable urban living, providing residents with a comfortable and energy-efficient home.",
        images: [adelaide1, adelaide2, adelaide3, adelaide4, adelaide5],
    },
    {
        id: 3,
        name: "Australian Marine Complex, Henderson, Western Australia",
        description:
            "State-of-the-art convention center built with our high-strength concrete and innovative sound-dampening materials. This versatile space accommodates large-scale events while maintaining optimal acoustics and structural integrity.",
        images: [marineComplex1, marineComplex2, marineComplex3],
    },
    {
        id: 4,
        name: "Esso Port Stanvac - Loading Wharf South Australia",
        description:
            "Modern healthcare facility utilizing our antimicrobial flooring and specialized air filtration systems. Our materials contribute to a sterile environment, promoting patient health and recovery in this cutting-edge medical center.",
        images: [esso1, esso2],
    },
    {
        id: 5,
        name: "The 1836-meter-long Busselton Jetty, Busselton, Western Australia",
        description:
            "A 2-mile waterfront development featuring our salt-resistant paving materials and durable outdoor fixtures. This project demonstrates our expertise in creating long-lasting infrastructure in challenging coastal environments.",
        images: [busselton1],
    },
]

export default function MobileCompletedProjects() {
  return (
    <div className="space-y-24">
      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} isReversed={index % 2 !== 0} />
      ))}
    </div>
  )
}

function ProjectItem({ project, isReversed }: { project: Project; isReversed: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }

  const contentSection = (
    <div className="flex flex-col justify-center space-y-4 md:w-1/2">
      <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  )

  const carouselSection = (
    <div className="relative md:w-1/2">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg shadow-lg">
      <img
  src={project.images[currentImageIndex] || "/placeholder.svg"}
  alt={`${project.name} - Image ${currentImageIndex + 1}`}
  className="w-full h-full object-cover"
/>

      </div>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition duration-300"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )

  return (
    <div className={`flex flex-col gap-8 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
      {contentSection}
      {carouselSection}
    </div>
  )
}

