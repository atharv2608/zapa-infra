import { Briefcase, Building2, ThumbsUp, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"

function Highlights() {
  return (
    <section className="py-16 bg-white px-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "15+ Years", description: "of Industry Experience" },
              { icon: Users, title: "1000+", description: "Satisfied Clients" },
              { icon: ThumbsUp, title: "98%", description: "Client Satisfaction Rate" },
              { icon: Briefcase, title: "500+", description: "Projects Completed" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <item.icon className="mx-auto h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Highlights