import farmingdaleLogo from "../assets/farmingdale.jpeg"
import queensLogo from "../assets/QC.jpeg"

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
          <div className="absolute left-3 top-0 h-full w-px bg-white md:left-5"></div>

          <div className="space-y-12">

            {/* Farmingdale State College */}
            <div className="relative pl-12 md:pl-16">

              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>

              <div className="rounded-3xl border border-gray-700 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600 md:p-10">

                <div className="flex items-start gap-4">
                  <img
                    src={farmingdaleLogo}
                    alt="Farmingdale State College logo"
                    className="h-14 w-14 rounded-full border border-gray-700 bg-white object-cover p-1 shrink-0 md:h-16 md:w-16"
                  />

                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">
                      Farmingdale State College
                    </h3>

                    <p className="mt-3 text-xl font-semibold text-sky-400">
                      Computer Science - B.S.
                    </p>

                    <p className="mt-2 italic text-gray-400">
                      2026 - Present
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-gray-300">
                  <span className="font-semibold text-white">
                    Relevant Coursework:
                  </span>{" "}
                  Object-Oriented Programming, Data Structures and Algorithms,
                  Database Management Systems, Software Engineering, Computer
                  Networks, Operating Systems, Web Development, Mobile App
                  Development
                </p>

                <div className="mt-6 text-gray-300">
                  <p>
                    <span className="font-semibold text-white">
                      GPA:
                    </span>{" "}
                    3.9
                  </p>
                </div>

              </div>
            </div>

            {/* Queens College */}
            <div className="relative pl-12 md:pl-16">

              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>

              <div className="rounded-3xl border border-gray-700 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600 md:p-10">

                <div className="flex items-start gap-4">
                  <img
                    src={queensLogo}
                    alt="Queens College logo"
                    className="h-14 w-14 rounded-full border border-gray-700 bg-white object-cover p-1 shrink-0 md:h-16 md:w-16"
                  />

                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">
                      CUNY Queens College
                    </h3>

                    <p className="mt-3 text-xl font-semibold text-sky-400">
                      Computer Science - B.A.
                    </p>

                    <p className="mt-2 italic text-gray-400">
                      2023 - 2025
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-gray-300">
                  <span className="font-semibold text-white">
                    Relevant Coursework:
                  </span>{" "}
                  Data Structures and Algorithms, Computer Architecture,
                  Operating Systems, Database Systems, Software Engineering,
                  Web Development, Mobile App Development
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