function Experience() {
    return (
      <section id="experience" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
  
          {/* Section Heading */}
          <h2 className="text-4xl font-bold md:text-5xl">
            Experience
          </h2>
  
          {/* Timeline */}
          <div className="relative mt-16">
  
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 h-full w-px bg-white md:left-5"></div>
  
            <div className="space-y-12">
  
              {/* Unadat */}
              <div className="relative pl-12 md:pl-16">
  
                {/* Timeline Dot */}
                <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>
  
                <div className="rounded-2xl border border-gray-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600">
  
                  <h3 className="text-2xl font-bold md:text-3xl">
                    SWE Intern / Project Management
                  </h3>
  
                  <p className="mt-2 text-xl font-semibold text-sky-400">
                    Unadat
                  </p>
  
                  <p className="mt-2 italic text-gray-400">
                    February 2025 — May 2025
                  </p>
  
                  <ul className="mt-6 space-y-3 leading-7 text-gray-300">
                    <li>
                      • Led Agile Scrum collaboration between engineers and
                      product team members through sprint planning, standups,
                      and retrospectives.
                    </li>
  
                    <li>
                      • Developed an interactive insurance calculator using
                      HTML, CSS, JavaScript, and PHP.
                    </li>
  
                    <li>
                      • Helped build personalized financial guidance features
                      designed around user needs.
                    </li>
                  </ul>
  
                </div>
              </div>
  
              {/* Robotics */}
              <div className="relative pl-12 md:pl-16">
  
                <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>
  
                <div className="rounded-2xl border border-gray-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600">
  
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Lead Software Engineer
                  </h3>
  
                  <p className="mt-2 text-xl font-semibold text-sky-400">
                    FIRST TAEHS Robotics
                  </p>
  
                  <p className="mt-2 italic text-gray-400">
                    September 2021 — June 2023
                  </p>
  
                  <ul className="mt-6 space-y-3 leading-7 text-gray-300">
                    <li>
                      • Led a team of 10 student engineers across software,
                      mechanical, electrical, and pneumatics disciplines.
                    </li>
  
                    <li>
                      • Programmed robotic systems using Java and LabVIEW while
                      improving motor control and robot performance.
                    </li>
  
                    <li>
                      • Developed a timing algorithm that reduced battery
                      consumption and improved competition runtime.
                    </li>
  
                    <li>
                      • Mentored incoming members on programming architecture,
                      code organization, and engineering practices.
                    </li>
                  </ul>
  
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Experience