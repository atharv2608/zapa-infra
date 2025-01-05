import { Button } from "../ui/button"

function CallToAction() {
  return (
    <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8">
              Explore our wide range of high-quality construction materials or
              get in touch with our experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="p-4 bg-white text-green-500 font-bold hover:bg-white">
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
  )
}

export default CallToAction