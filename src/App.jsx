import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Experience from "./components/Experience.jsx"
import Education from "./components/Education.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import ParticleBackground from "./components/ParticleBackground.jsx"

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">

      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App