import { useState } from "react"
import ScrollReveal from "./ScrollReveal"

function Contact() {
  const [status, setStatus] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    try {
      setStatus("Sending...")

      const response = await fetch(
        "https://formspree.io/f/mzebwone",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (response.ok) {
        setStatus("Message sent successfully!")
        form.reset()
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch {
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-2">

            {/* Left Side */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                Contact
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Let's build something together.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                I'm always open to discussing software engineering opportunities,
                collaborations, and interesting projects.
              </p>

              <div className="mt-8 space-y-3 text-gray-300">
                <p>
                  Phone:{" "}
                  <span className="text-white">
                    516-344-9595
                  </span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-800 bg-zinc-900/60 p-8 md:p-10"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Email */}
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Subject */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="mt-2 w-full rounded-xl border border-gray-700 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-xl border border-gray-700 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-7 w-full rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-300"
              >
                Send Message
              </button>

              {/* Status */}
              {status && (
                <p className="mt-4 text-center text-sm text-gray-400">
                  {status}
                </p>
              )}

            </form>

          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

export default Contact