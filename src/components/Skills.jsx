import ScrollReveal from "./ScrollReveal"

function Skills() {
  const skillGroups = [
    {
      title: "Languages & Web",
      skills: [
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" },
        { name: "Python", icon: "py" },
        { name: "Java", icon: "java" },
        { name: "C++", icon: "cpp" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
      ],
    },

    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "react" },
        { name: "React Native", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Django", icon: "django" },
        { name: "Flask", icon: "flask" },
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
        { name: "Redis", icon: "redis" },
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
        <ScrollReveal>
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Tech Stack
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Technologies and tools I use to build modern software and web
              applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill Groups */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              delay={index * 0.08}
            >
              <div className="h-full rounded-3xl border border-gray-800 bg-zinc-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-600 md:p-8">

                <h3 className="text-2xl font-bold">
                  {group.title}
                </h3>

                <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">

                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-800 bg-black/40 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-400"
                    >

                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={`${skill.name} logo`}
                        loading="lazy"
                        className="h-10 w-10 transition duration-300 group-hover:scale-110 md:h-12 md:w-12"
                      />

                      <span className="text-sm font-medium text-gray-300 transition group-hover:text-white">
                        {skill.name}
                      </span>

                    </div>
                  ))}

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills