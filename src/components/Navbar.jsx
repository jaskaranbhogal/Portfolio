import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/jb-logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("top")

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      let currentSection = "top"

      for (const link of navLinks) {
        const section = document.getElementById(link.id)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.id
        }
      }

      // Make sure Contact activates when reaching the bottom
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50

      if (nearBottom) {
        currentSection = "contact"
      }

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const linkClass = (id) =>
    `relative transition duration-300 ${
      activeSection === id
        ? "text-sky-400"
        : "text-gray-400 hover:text-white"
    }`

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

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
            >
              {link.label}

              {/* Active underline */}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-sky-400"></span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:hidden">

        {/* Logo */}
        <a
          href="#top"
          aria-label="Home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Jaskaran Bhogal logo"
            className="h-12 w-12 object-contain"
          />
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-900 bg-black/95 px-6 py-6 md:hidden">
          <div className="flex flex-col items-center gap-6">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar