import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-900 bg-black/80 backdrop-blur-md">

      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-5xl items-center justify-center gap-14 px-8 py-5 md:flex">

        {/* JB Logo */}
        <a
          href="#top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold tracking-widest text-white transition duration-300 hover:scale-105 hover:border-white"
        >
          JB
        </a>

        {/* Desktop Links */}
        <div className="flex items-center gap-8 text-gray-400">

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

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-6 py-5 md:hidden">

        {/* Mobile JB Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold tracking-widest text-white"
        >
          JB
        </a>

        {/* Hamburger / Close Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="text-2xl text-white transition hover:text-gray-400"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-900 bg-black/95 px-6 py-8 backdrop-blur-md md:hidden">

          <div className="flex flex-col items-center gap-7 text-lg text-gray-300">

            <a
              href="#about"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Education
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Contact
            </a>

          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar