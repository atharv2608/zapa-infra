import Achievements from "@/components/projects/Achievements"
import CallToAction from "@/components/projects/CallToAction"
import CompletedProjects from "@/components/projects/CompletedProjects"
import FeaturedWorks from "@/components/projects/FeaturedWorks"
import Hero from "@/components/projects/Hero"


function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Works Carousel */}
      {/* <FeaturedWorks /> */}

      {/* Completed Works Carousel */}
      <CompletedProjects />

      {/* Achievements and Highlights */}
      <Achievements />

      {/* Call-to-Action */}
      <CallToAction />
    </div>
  )
}

export default Projects