import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, techStack } from '../data/portfolio'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// Tech badge with animated glow
function TechBadge({ name, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="relative group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card cursor-default transition-all duration-300 hover:border-accent/30"
    >
      {/* Color dot */}
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
      />
      <span className="font-mono text-sm text-text-dim group-hover:text-text transition-colors">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <p className="section-label mb-3">02 / Skills</p>
            <h2 className="section-title text-4xl sm:text-5xl">
              My tech<br />
              <span className="text-gradient">arsenal</span>
            </h2>
          </div>
        </Reveal>

        {/* Tech badge cloud */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-16">
            {techStack.map((tech, i) => (
              <TechBadge key={tech.name} {...tech} index={i} />
            ))}
          </div>
        </Reveal>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, ci) => (
            <Reveal key={category.category} delay={0.05 * ci}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/20 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-6 rounded-full bg-accent" />
                  <h3 className="font-syne font-semibold text-text">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-text-dim font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
