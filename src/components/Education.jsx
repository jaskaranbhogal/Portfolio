function Education() {
    return (
      <section id="education" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
  
          {/* Section Heading */}
          <h2 className="text-4xl font-bold md:text-5xl">
            Education
          </h2>
  
          {/* Timeline */}
          <div className="relative mt-16">
  
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 h-full w-px bg-gray-700 md:left-5"></div>
  
            <div className="relative pl-12 md:pl-16">
  
              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>
  
              {/* Education Card */}
              <div className="rounded-2xl border border-gray-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600">
  
                <h3 className="text-2xl font-bold md:text-3xl">
                  Farmingdale State College
                </h3>
  
                <p className="mt-3 text-xl font-semibold text-sky-400">
                  Bachelor of Science in Computer Science
                </p>
  
                <p className="mt-2 italic text-gray-400">
                  Expected Graduation — May 2027
                </p>
  
                <div className="mt-6 space-y-4 text-gray-300">
  
                  <p>
                    <span className="font-semibold text-white">
                      GPA:
                    </span>{" "}
                    3.9
                  </p>
  
                  <p>
                    Focused on software development, programming,
                    computer science fundamentals, and building
                    practical applications.
                  </p>
  
                </div>
  
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
  export default Education