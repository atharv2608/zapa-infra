function Hero() {
  return (
    <section className="relative h-[50vh] bg-green-700 text-white px-5">
        <img
          src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch with Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
          We're here to answer any questions about our construction materials
          </p>
        </div>
      </section>
  );
}

export default Hero;
