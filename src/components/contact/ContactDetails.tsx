import { Clock, Mail, MapPin, Phone } from "lucide-react";

function ContactDetails() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Contact Information
            </h2>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-lg font-medium">
                  Primary: +1 (555) 123-4567
                </p>
                <p className="text-gray-600">Secondary: +1 (555) 987-6543</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-green-700" />
              <p className="text-lg">info@zapainfra.com</p>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-700 mt-1" />
              <p className="text-lg">
                123 Construction Avenue,
                <br />
                Building Block, Suite 456,
                <br />
                Metropolis, MP 12345
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-lg font-medium">Business Hours</p>
                <p className="text-gray-600">Monday to Friday: 9 AM – 6 PM</p>
                <p className="text-gray-600">Saturday: 10 AM – 4 PM</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Office location"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* This image is only visible on mobile devices */}
          <div className="flex items-center justify-center md:hidden">
            <img
              src="https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Office location"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
