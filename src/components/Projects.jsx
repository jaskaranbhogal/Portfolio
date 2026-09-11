import ProjectCard from "./ProjectCard.jsx"

import receiptify1 from "../assets/projects/receiptify1.png"
import receiptify2 from "../assets/projects/receiptify2.png"
import receiptify3 from "../assets/projects/receiptify3.png"
import receiptify4 from "../assets/projects/receiptify4.png"
import receiptify5 from "../assets/projects/receiptify5.png"

import campusdash1 from "../assets/projects/campusdash1.png"
import campusdash2 from "../assets/projects/campusdash2.png"
import campusdash3 from "../assets/projects/campusdash3.png"
import campusdash4 from "../assets/projects/campusdash4.png"
import campusdash5 from "../assets/projects/campusdash5.png"

import docdiscovery1 from "../assets/projects/docdiscovery1.png"
import docdiscovery2 from "../assets/projects/docdiscovery2.png"
import docdiscovery3 from "../assets/projects/docdiscovery3.png"
import docdiscovery4 from "../assets/projects/docdiscovery4.png"

function Projects() {
  const projects = [
    {
      title: "Receiptify",

      description:
        "AI-powered receipt management system. Authenticated users upload their receipts which gets parsed by Gemini 2.5 Flash, and automatically added to it's categorized folder. Users can search for receipts and download them at any time. Users are provided with a financial dashboard which has data visualizations and AI generated financial advise based on 30-day spending.",

      tech: [
        "React",
        "Tailwind CSS",
        "Supabase",
        "Gemini API",
      ],

      images: [
        receiptify1,
        receiptify2,
        receiptify3,
        receiptify4,
        receiptify5,
      ],

      github: "https://github.com/alfredscyriac/Receiptify",
      demo: "https://vimeo.com/1128622933?fl=pl&fe=vl",
      live: "https://receiptify-khaki.vercel.app/",
    },

    {
      title: "CampusDash",

      description:
        "Full-Stack campus food delivery platform connecting students with peer dashers, featuring authentication, real-time order tracking, and interactive campus maps.",

      tech: [
        "JavaScript",
        "Firebase",
        "Firestore",
        "OpenStreetMap",
        "Leaflet.js",
      ],

      images: [
        campusdash1,
        campusdash2,
        campusdash3,
        campusdash4,
        campusdash5,
      ],

      github: "https://github.com/DilverSingh23/campus-dash",
      demo: null,
      live: "https://campus-dash.vercel.app/",
    },

    {
      title: "Doc Discovery",

      description:
        "Doctor-matching platform that helps users find doctors based on specialty, insurance, and symptoms through an interactive user-focused interface.",

      tech: [
        "JavaScript",
        "HTML/CSS",
        "Google Apps Script",
        "BetterDoctor API",
      ],

      images: [
        docdiscovery1,
        docdiscovery2,
        docdiscovery3,
        docdiscovery4,
      ],

      github: "https://github.com/DilverSingh23/hackknight",
      demo: "https://www.youtube.com/watch?v=2buKjjW0kuM",
      live: null,
    },
  ]

  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-4xl font-bold md:text-5xl">
          Projects
        </h2>

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects