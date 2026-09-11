import { motion, useReducedMotion } from "framer-motion"

function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const reduceMotion = useReducedMotion()

  const directions = {
    up: { x: 0, y: 35 },
    down: { x: 0, y: -35 },
    left: { x: 35, y: 0 },
    right: { x: -35, y: 0 },
  }

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal