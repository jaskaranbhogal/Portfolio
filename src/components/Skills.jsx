function Skills() {
    const skillGroups = [
      {
        title: "Languages & Web",
        skills: [
          { name: "Java", icon: "java" },
          { name: "JavaScript", icon: "js" },
          { name: "Python", icon: "py" },
          { name: "C++", icon: "cpp" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
        ],
      },
  
      {
        title: "Frameworks & Libraries",
        skills: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Django", icon: "django" },
          { name: "Spring Boot", icon: "spring" },
        ],
      },
  
      {
        title: "Databases & Backend",
        skills: [
          { name: "Firebase", icon: "firebase" },
          { name: "Supabase", icon: "supabase" },
          { name: "PostgreSQL", icon: "postgres" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
        ],
      },
  
      {
        title: "Tools & Platforms",
        skills: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Docker", icon: "docker" },
          { name: "Figma", icon: "figma" },
        ],
      },
    ]
  
    return (
      <section id="skills" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
  
          {/* Section Heading */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Tech Stack
          </p>
  
          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I work with.
          </h2>
  
          <div className="mt-16 space-y-14">
            {skillGroups.map((group) => (
              <div key={group.title}>
  
                {/* Category */}
                <h3 className="mb-6 text-xl font-semibold text-gray-300">
                  {group.title}
                </h3>
  
                {/* Skills */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-gray-600 hover:bg-zinc-900"
                    >
  
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="h-12 w-12 transition duration-300 group-hover:scale-110"
                      />
  
                      <p className="text-center text-sm font-medium text-gray-300">
                        {skill.name}
                      </p>
  
                    </div>
                  ))}
  
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  
  export default Skills