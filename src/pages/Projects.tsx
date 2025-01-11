import Achievements from "@/components/projects/Achievements"
import CallToAction from "@/components/projects/CallToAction"
import FeaturedWorks from "@/components/projects/FeaturedWorks"
import Hero from "@/components/projects/Hero"
import Works from "@/components/projects/Works"


function Projects() {
  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <Hero />

    {/* Featured Works Carousel */}
   <FeaturedWorks />

    {/* Other Projects Section */}
    <Works />

    {/* Achievements and Highlights */}
    <Achievements />

    {/* Call-to-Action */}
    <CallToAction />
  </div>
  )
}

export default Projects