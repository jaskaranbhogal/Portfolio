function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      
      {/* Initials Logo */}
      <a
        href="#top"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold tracking-widest text-white transition duration-300 hover:scale-105 hover:border-white"
      >
        JB
      </a>

      {/* Navigation Links */}
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
    href="#contact"
    className="transition duration-300 hover:text-white"
  >
    Contact
  </a>
</div>

    </nav>
  )
}

export default Navbar