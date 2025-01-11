import CallToAction from "@/components/contact/CallToAction";
import ContactDetails from "@/components/contact/ContactDetails";
import Hero from "@/components/contact/Hero";
import Social from "@/components/contact/Social";

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Contact Details Section */}
      <ContactDetails />

      {/* Social Media Links */}
      <Social />

      {/* Call-to-Action Section */}
      <CallToAction />
    </div>
  );
}

export default Contact;
