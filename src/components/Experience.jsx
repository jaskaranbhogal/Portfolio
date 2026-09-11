import ScrollReveal from "./ScrollReveal"
import unadatLogo from "../assets/unadat.jpeg"
import roboticsLogo from "../assets/taehs.jpeg"

function Experience() {
  return (
    <section id="experience" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <ScrollReveal>
          <h2 className="text-4xl font-bold md:text-5xl">
            Experience
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-white md:left-5"></div>

          <div className="space-y-12">

            {/* Unadat */}
            <ScrollReveal delay={0.1}>
              <div className="relative pl-12 md:pl-16">

                {/* Timeline Dot */}
                <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>

                <div className="rounded-3xl border border-gray-700 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600 md:p-10">

                  {/* Company Header */}
                  <div className="flex items-start gap-4">

                    <img
                      src={unadatLogo}
                      alt="Unadat logo"
                      className="h-14 w-14 shrink-0 rounded-full border border-gray-700 bg-white object-contain p-1 md:h-16 md:w-16"
                    />

                    <div>
                      <h3 className="text-2xl font-bold md:text-3xl">
                        Unadat
                      </h3>

                      <p className="mt-3 text-xl font-semibold text-sky-400">
                        Software Engineering Intern / Project Management
                      </p>

                      <p className="mt-2 italic text-gray-400">
                        February 2025 - May 2025
                      </p>
                    </div>

                  </div>

                  {/* Experience Details */}
                  <ul className="mt-6 space-y-4 leading-7 text-gray-300">

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Led a cross-functional Agile Scrum team of 4 engineers
                        and 3 product members throughout the development process.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Developed an interactive insurance calculator using
                        HTML, CSS, JavaScript, and PHP.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Helped create a user-focused experience that provided
                        personalized financial guidance based on customer input.
                      </span>
                    </li>

                  </ul>

                </div>
              </div>
            </ScrollReveal>

            {/* FIRST TAEHS Robotics */}
            <ScrollReveal delay={0.2}>
              <div className="relative pl-12 md:pl-16">

                {/* Timeline Dot */}
                <div className="absolute left-[7px] top-10 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-black md:left-[15px]"></div>

                <div className="rounded-3xl border border-gray-700 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600 md:p-10">

                  {/* Organization Header */}
                  <div className="flex items-start gap-4">

                    <img
                      src={roboticsLogo}
                      alt="FIRST TAEHS Robotics logo"
                      className="h-14 w-14 shrink-0 rounded-full border border-gray-700 bg-white object-contain p-1 md:h-16 md:w-16"
                    />

                    <div>
                      <h3 className="text-2xl font-bold md:text-3xl">
                        FIRST TAEHS Robotics
                      </h3>

                      <p className="mt-3 text-xl font-semibold text-sky-400">
                        Lead Software Engineer
                      </p>

                      <p className="mt-2 italic text-gray-400">
                        September 2021 - June 2023
                      </p>
                    </div>

                  </div>

                  {/* Experience Details */}
                  <ul className="mt-6 space-y-4 leading-7 text-gray-300">

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Led a 10-member robotics team across software,
                        mechanical, electrical, and pneumatic systems.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Developed robotics software using Java and LabVIEW,
                        increasing robot movement speed by 200%.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Designed a timing algorithm that reduced battery
                        consumption by 47%.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Mentored team members and helped coordinate software
                        development with the rest of the engineering team.
                      </span>
                    </li>

                  </ul>

                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience