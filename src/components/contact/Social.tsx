import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function Social() {
  return (
    <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-700">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
  )
}

export default Social