import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextImage = () => {
    setDirection(1)

    setCurrentImage((prev) =>
      (prev + 1) % project.images.length
    )
  }

  const previousImage = () => {
    setDirection(-1)

    setCurrentImage((prev) =>
      (prev - 1 + project.images.length) %
      project.images.length
    )
  }

  const selectImage = (index) => {
    if (index === currentImage) return

    setDirection(index > currentImage ? 1 : -1)
    setCurrentImage(index)
  }

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
    }),
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-800 bg-zinc-900/60">

      {/* Image Carousel */}
      <div className="relative flex h-[300px] items-center justify-center overflow-hidden border-b border-gray-800 bg-zinc-950 md:h-[500px]">

        {project.images.length > 0 ? (
          <>
            <AnimatePresence
              initial={false}
              custom={direction}
            >
              <motion.img
                key={currentImage}
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              {currentImage + 1} / {project.images.length}
            </div>

            {project.images.length > 1 && (
              <>
                {/* Previous */}
                <button
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-black/70 text-white transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
                >
                  <FaChevronLeft />
                </button>

                {/* Next */}
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-black/70 text-white transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
                >
                  <FaChevronRight />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 z-10 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
                        currentImage === index
                          ? "scale-125 bg-sky-400"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-lg font-medium">
              Project Screenshot
            </p>

            <p className="mt-2 text-sm">
              Images will be added later
            </p>
          </div>
        )}

      </div>

      {/* Project Information */}
      <div className="p-8 md:p-10">

        <h3 className="text-3xl font-bold md:text-4xl">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-400">
          {project.description}
        </p>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-white"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-white"
            >
              Video Demo
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-300"
            >
              Live Site
            </a>
          )}

        </div>
      </div>

    </div>
  )
}

export default ProjectCard