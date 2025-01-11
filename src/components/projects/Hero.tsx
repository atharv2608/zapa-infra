function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white">
      <img
        src="https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Zapa Infra Project"
        className="object-cover w-full h-full"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Legacy of Excellence
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Empowering construction with top-tier materials for landmark projects
        </p>
      </div>
    </section>
  );
}

export default Hero;
