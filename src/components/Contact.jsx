import { useState } from "react"

function Contact() {
  const [status, setStatus] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    setStatus("Sending...")

    const form = event.target
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mzebwone", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

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

        {/* Heading */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Contact
        </p>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Let's build something together.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Have an opportunity, project, or question? Send me a message
              and I'll get back to you as soon as I can.
            </p>
            </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-gray-800 bg-zinc-900/60 p-8"
          >

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-gray-400"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-white"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-400"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-gray-400"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-white"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full resize-none rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-white"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-300"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-gray-400">
                {status}
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact