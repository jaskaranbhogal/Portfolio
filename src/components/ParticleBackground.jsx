import { useEffect, useRef } from "react"

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let animationFrameId
    let particles = []

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      createParticles()
    }

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight

        this.size = Math.random() * 1.8 + 0.5

        this.speedX = (Math.random() - 0.5) * 0.35
        this.speedY = (Math.random() - 0.5) * 0.35

        this.baseX = this.x
        this.baseY = this.y
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)

        ctx.fillStyle = "rgba(125, 211, 252, 0.65)"
        ctx.fill()
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > window.innerWidth) {
          this.speedX *= -1
        }

        if (this.y < 0 || this.y > window.innerHeight) {
          this.speedY *= -1
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y

          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius

            const directionX = dx / distance
            const directionY = dy / distance

            this.x -= directionX * force * 1.8
            this.y -= directionY * force * 1.8
          }
        }

        this.draw()
      }
    }

    function createParticles() {
      particles = []

      const particleCount =
        window.innerWidth < 768
          ? 45
          : Math.min(Math.floor(window.innerWidth / 14), 115)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      const maxDistance = 120

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y

          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            ctx.beginPath()
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.12})`
            ctx.lineWidth = 0.7

            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (const particle of particles) {
        particle.update()
      }

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    function drawStaticFrame() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (const particle of particles) {
        particle.draw()
      }

      connectParticles()
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    function handleMouseLeave() {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    resizeCanvas()

    if (prefersReducedMotion) {
      drawStaticFrame()
    } else {
      animate()
    }

    return () => {
      cancelAnimationFrame(animationFrameId)

      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default ParticleBackground