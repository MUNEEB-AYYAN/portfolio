import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/portfolio'

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

export default function Experience() {
  const exp = experience[0]

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <p className="section-label mb-3">04 / Experience</p>
            <h2 className="section-title text-4xl sm:text-5xl">
              Where I've<br />
              <span className="text-gradient">made impact</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline left */}
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="sticky top-28">
                {/* Current role card */}
                <div className="bg-card rounded-2xl border border-accent/20 p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent" />

                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="font-mono text-xs text-green-400">Current Role</span>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-text mb-1">{exp.title}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{exp.company}</p>

                  <div className="space-y-2 text-xs font-mono text-text-dim">
                    <div className="flex items-center gap-2">
                      <span className="text-muted">📅</span> {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted">📍</span> {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted">💼</span> {exp.type}
                    </div>
                  </div>
                </div>

                {/* Vertical line + education */}
                <div className="flex items-stretch mt-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px flex-1 bg-border min-h-[40px]" />
                    <div className="w-3 h-3 rounded-full border-2 border-border bg-bg" />
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="bg-card rounded-xl border border-border p-4">
                      <p className="font-mono text-xs text-text-dim mb-1">B.Tech IT · 2019–2023</p>
                      <p className="font-syne font-semibold text-sm text-text leading-snug">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bullets right */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal delay={0.05}>
              <p className="font-mono text-xs text-muted uppercase tracking-widest mb-6">Key Achievements</p>
            </Reveal>
            {exp.bullets.map((bullet, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-accent font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-text-dim text-sm leading-relaxed group-hover:text-text transition-colors">
                    {bullet}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
