import ProjectGrid from "./ProjectGrid"

function Works() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Completed Projects</h2>
          <ProjectGrid />
        </div>
      </section>
  )
}

export default Works