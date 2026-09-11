function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-900 bg-black/80 px-8 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Initials */}
        <a
          href="#top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold tracking-widest text-white transition duration-300 hover:scale-105 hover:border-white"
        >
          JB
        </a>

        {/* Links */}
        <div className="flex gap-8 text-gray-400">
          <a
            href="#about"
            className="transition duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#experience"
            className="transition duration-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#education"
            className="transition duration-300 hover:text-white"
          >
            Education
          </a>

          <a
            href="#projects"
            className="transition duration-300 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="transition duration-300 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition duration-300 hover:text-white"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar