import headshot from "../assets/headshot.jpeg"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

function Hero() {
  return (
    <section
      id="top"
      className="min-h-[90vh] px-8 flex items-center"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Jaskaran
            <br />
            Bhogal
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Computer Science student and software developer focused on
            building practical, modern, and user-friendly applications.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">

            <a
              href="https://github.com/jaskaranbhogal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 text-2xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jaskaranbhogal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 text-2xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bhogalj03@gmail.com"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 text-2xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              <SiGmail />
            </a>

          </div>

          {/* Project Link */}
          <a
            href="#projects"
            className="mt-10 inline-block text-gray-400 transition hover:text-white"
          >
            View my work ↓
          </a>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl border border-gray-800"></div>

            <img
              src={headshot}
              alt="Jaskaran Bhogal"
              className="relative h-[420px] w-[340px] rounded-3xl object-cover md:h-[500px] md:w-[400px]"
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero