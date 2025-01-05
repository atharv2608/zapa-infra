
function Gallery() {
  return (
    <section className="py-16 bg-white px-5">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Our Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={`Project ${index + 1}`}
              className="rounded-lg object-cover"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Gallery