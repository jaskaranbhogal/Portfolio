import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Experience from "./components/Experience.jsx"
import Education from "./components/Education.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </div>
  )
}

export default App