
function CompanyOverview() {
  return (
    <section className="py-16 bg-gray-50 px-5">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Our Story</h2>
          <p className="text-gray-700 mb-4">
          At Zapa, we are pioneers in advanced waterproofing and concrete protection solutions. With decades of innovation and expertise, we provide industry-leading technologies that extend the life and durability of concrete structures. 
          </p>
          <p className="text-gray-700 mb-4">
          Our proprietary crystalline technology has been trusted worldwide to enhance the resilience of infrastructure, commercial buildings, and industrial projects. Driven by quality, performance, and sustainability, we continue to redefine concrete protection for a stronger and more durable future.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Zapa Infra facility"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>

  )
}

export default CompanyOverview