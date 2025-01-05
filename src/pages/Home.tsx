
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Highlight Section */}
       
        <Highlights />
        {/* Featured Products */}
        <FeaturedProducts />

        {/* Call-to-Action */}
        <CallToAction />
      </main>

      
      
    </div>
  );
}
