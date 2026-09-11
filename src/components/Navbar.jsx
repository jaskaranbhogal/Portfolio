import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/jb-logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-900 bg-black/80 backdrop-blur-md">

      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-5xl items-center justify-center gap-14 px-8 py-5 md:flex">

        {/* Logo */}
        <a
          href="#top"
          aria-label="Home"
          className="transition duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Jaskaran Bhogal logo"
            className="h-14 w-14 object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="flex items-center gap-8 text-gray-400">
          <a href="#about" className="transition duration-300 hover:text-white">
            About
          </a>

          <a href="#experience" className="transition duration-300 hover:text-white">
            Experience
          </a>

          <a href="#education" className="transition duration-300 hover:text-white">
            Education
          </a>

          <a href="#projects" className="transition duration-300 hover:text-white">
            Projects
          </a>

          <a href="#skills" className="transition duration-300 hover:text-white">
            Skills
          </a>

          <a href="#contact" className="transition duration-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-6 py-5 md:hidden">

        {/* Mobile Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Home"
          className="transition duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Jaskaran Bhogal logo"
            className="h-12 w-12 object-contain"
          />
        </a>

        {/* Hamburger */}
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

            <a href="#about" onClick={closeMenu} className="transition hover:text-white">
              About
            </a>

            <a href="#experience" onClick={closeMenu} className="transition hover:text-white">
              Experience
            </a>

            <a href="#education" onClick={closeMenu} className="transition hover:text-white">
              Education
            </a>

            <a href="#projects" onClick={closeMenu} className="transition hover:text-white">
              Projects
            </a>

            <a href="#skills" onClick={closeMenu} className="transition hover:text-white">
              Skills
            </a>

            <a href="#contact" onClick={closeMenu} className="transition hover:text-white">
              Contact
            </a>

          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar