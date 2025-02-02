import CallToAction from "@/components/about/CallToAction";
import CompanyOverview from "@/components/about/CompanyOverview";
import Hero from "@/components/about/Hero";
import Highlights from "@/components/about/Highlights";
import TeamValues from "@/components/about/TeamValues";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Company Overview */}
      <CompanyOverview />

      {/* Achievements and Highlights */}
      <Highlights />

      {/* Team/Values Section */}
      <TeamValues />

      {/* Gallery Section */}
      {/* <Gallery /> */}
      
      {/* Call-to-Action (CTA) */}
      <CallToAction />
    </div>
  );
};

export default About;
