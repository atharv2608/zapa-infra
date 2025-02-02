import Achievements from "@/components/projects/Achievements"
import CallToAction from "@/components/projects/CallToAction"
import CompletedProjects from "@/components/projects/CompletedProjects"
import Hero from "@/components/projects/Hero"
import MobileCompletedProjects from "@/components/projects/MobileCompletedProjects"


function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Works Carousel */}
      {/* <FeaturedWorks /> */}

      {/* Completed Works Carousel */}
      <div className="hidden md:block">
        <CompletedProjects />
      </div>

      <div className="md:hidden px-8 py-10">
        <MobileCompletedProjects />
      </div>

      {/* Achievements and Highlights */}
      <Achievements />

      {/* Call-to-Action */}
      <CallToAction />
    </div>
  )
}

export default Projects