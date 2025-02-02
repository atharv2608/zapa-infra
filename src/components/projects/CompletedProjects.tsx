
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Project = {
    id: number
    name: string
    description: string
    images: string[]
}
import { projects } from "./MobileCompletedProjects"

export default function CompletedProjects() {
    return (
        <section className="p-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Completed Projects</h2>
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <ProjectItem key={project.id} project={project} isReversed={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </section>

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
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
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

