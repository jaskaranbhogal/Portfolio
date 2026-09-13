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
                        Led a 7-member cross-functional Agile Scrum team of 4 engineers and 3 product
                        team members, facilitating sprint planning, daily standups, and retrospectives
                        while maintaining 90%+ sprint task completion and supporting timely project
                        delivery.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Developed an interactive insurance calculator using HTML/CSS, JavaScript, and
                        PHP that analyzed 9 user factors to generate personalized premium estimates and
                        coverage options, reducing estimate generation time from approximately 5 minutes
                        to under 30 seconds.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Implemented a goal-oriented user journey that analyzed 5+ customer inputs to
                        automatically generate 3 personalized coverage tiers, custom coverage estimates,
                        and actionable recommendations for reducing insurance costs and improving
                        financial decision-making.
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
                        Led a team of 10 student engineers across software, mechanical, electrical, and
                        pneumatics disciplines, overseeing project coordination, task delegation, and
                        team development.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Engineered a pneumatics-driven crane/claw mechanism by programming the robot in
                        Java and LabVIEW, optimizing motor control logic and wiring to achieve a 200%
                        increase in robot movement speed.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Developed a custom timing algorithm for the pneumatics system load-up sequence,
                        reducing battery consumption by 47% and extending operational runtime during
                        competition.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-sky-400">•</span>

                      <span>
                        Mentored the incoming student team on robot programming architecture, codebase
                        structure, and best practices to support continuity and efficient onboarding.
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