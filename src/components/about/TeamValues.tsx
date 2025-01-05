import { Award, Leaf, Lightbulb, Shield, Target, Users } from "lucide-react"

function TeamValues() {
  return (
    <section className="py-16 bg-gray-50 px-5">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-green-600">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Award, title: "Quality", description: "We never compromise on the quality of our products, ensuring durability and reliability in every project." },
          { icon: Lightbulb, title: "Innovation", description: "We continuously strive to improve and innovate in our field, staying ahead of industry trends and technologies." },
          { icon: Leaf, title: "Sustainability", description: "We are committed to environmentally friendly practices, promoting green building solutions for a better future." },
          { icon: Users, title: "Teamwork", description: "We believe in the power of collaboration, fostering a culture of mutual respect and shared success." },
          { icon: Target, title: "Precision", description: "We pay attention to every detail, ensuring precision in our products and services for optimal results." },
          { icon: Shield, title: "Integrity", description: "We conduct our business with the highest ethical standards, building trust with our clients and partners." },
        ].map((value, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-4">
              <value.icon className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
            </div>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default TeamValues