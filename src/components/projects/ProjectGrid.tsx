const projects = [
  {
    id: 1,
    name: "Urban Oasis Apartments",
    description:
      "A 30-story residential complex featuring our premium waterproofing solutions and eco-friendly insulation materials.",
    image:
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Riverside Convention Center",
    description:
      "State-of-the-art convention center built with our high-strength concrete and innovative sound-dampening materials.",
    image:
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Mountain View Hospital",
    description:
      "Modern healthcare facility utilizing our antimicrobial flooring and specialized air filtration systems.",
    image:
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Seaside Promenade",
    description:
      "A 2-mile waterfront development featuring our salt-resistant paving materials and durable outdoor fixtures.",
    image:
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Tech Innovation Campus",
    description:
      "Cutting-edge office complex built with our smart glass technology and energy-efficient building materials.",
    image:
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Green Energy Plant",
    description:
      "Sustainable power generation facility constructed with our heat-resistant concrete and specialized insulation.",
    image:
      "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-64">
            <div className="relative w-full h-full">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {project.name}
            </h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
