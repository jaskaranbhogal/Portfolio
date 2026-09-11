function Projects() {
    const projects = [
      {
        title: "Receiptify",
  
        description:
          "AI-powered receipt management application that allows users to upload receipts, automatically categorize them, search through saved receipts, and view spending insights.",
  
        tech: [
          "React",
          "Tailwind CSS",
          "Supabase",
          "Gemini API",
        ],
  
        image: null,
        github: "https://github.com/alfredscyriac/Receiptify",
        demo: "https://vimeo.com/1128622933?fl=pl&fe=vl",
        live: "https://receiptify-khaki.vercel.app/",
      },
  
      {
        title: "CampusDash",
  
        description:
          "Campus food delivery platform connecting students with peer dashers, featuring authentication, real-time order tracking, and interactive campus maps.",
  
        tech: [
          "JavaScript",
          "Firebase",
          "Firestore",
          "OpenStreetMap",
          "Leaflet.js",
        ],
  
        image: null,
        github: "https://github.com/DilverSingh23/campus-dash",
        demo: null,
        live: "https://campus-dash.vercel.app/",
      },
  
      {
        title: "Doc Discovery",
  
        description:
          "Doctor-matching platform that helps users find doctors based on specialty, insurance, and symptoms through an interactive user-focused interface.",
  
        tech: [
          "JavaScript",
          "HTML/CSS",
          "Google Apps Script",
          "BetterDoctor API",
        ],
  
        image: null,
        github: "https://github.com/DilverSingh23/hackknight",
        demo: "https://www.youtube.com/watch?v=2buKjjW0kuM",
        live: null,
      },
    ]
  
    return (
      <section id="projects" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
  
          {/* Section Heading */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Projects
          </p>
  
          <h2 className="text-4xl font-bold md:text-5xl">
            Things I've built.
          </h2>
  
          {/* Project Cards */}
          <div className="mt-16 space-y-16">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-gray-800 bg-zinc-900/60"
              >
  
                {/* Project Image */}
                <div className="flex h-[300px] items-center justify-center border-b border-gray-800 bg-zinc-900 md:h-[500px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <p className="text-lg font-medium">
                        Project Screenshot
                      </p>
  
                      <p className="mt-2 text-sm">
                        Image will be added later
                      </p>
                    </div>
                  )}
                </div>
  
                {/* Project Information */}
                <div className="p-8 md:p-10">
  
                  <h3 className="text-3xl font-bold md:text-4xl">
                    {project.title}
                  </h3>
  
                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
  
                  {/* Description */}
                  <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-400">
                    {project.description}
                  </p>
  
                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-4">
  
                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-white"
                      >
                        GitHub
                      </a>
                    )}
  
                    {/* Video Demo */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-white"
                      >
                        Video Demo
                      </a>
                    )}
  
                    {/* Live Site */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-300"
                      >
                        Live Site
                      </a>
                    )}
  
                  </div>
                </div>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  
  export default Projects