import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"

function CallToAction() {
  return (
    <section className="py-16 bg-green-600 text-white px-5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build with the Best?</h2>
          <p className="text-xl mb-8">Discover our range of high-quality construction materials.</p>
          <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
            <Link to="/products">
              Explore Our Products <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
  )
}

export default CallToAction