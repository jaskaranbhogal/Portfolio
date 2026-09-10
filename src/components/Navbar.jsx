function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-xl font-bold">
          JB
        </h1>
  
        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
  
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
  
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
  
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    )
  }
  
  export default Navbar