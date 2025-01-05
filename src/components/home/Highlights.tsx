import { Award, Shield, Truck } from "lucide-react"

function Highlights() {
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Zapa Infra?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: "High-Quality Materials",
            description:
              "We source and provide only the best construction materials for your projects.",
          },
          {
            icon: Truck,
            title: "Trusted by Top Builders",
            description:
              "Leading construction companies rely on our products for their projects.",
          },
          {
            icon: Award,
            title: "Industry-Leading Durability",
            description:
              "Our materials are known for their long-lasting performance and reliability.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <item.icon className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Highlights