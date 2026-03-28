import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden flex flex-col transition-all duration-500 hover:border-opacity-60"
      style={{
        borderColor: hovered ? `${project.color}40` : undefined,
        boxShadow: hovered ? `0 20px 60px ${project.color}15` : undefined,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Mock browser header */}
      <div className="px-6 pt-5 pb-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {['#FF5F57', '#FFBD2E', '#28CA42'].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="flex-1 ml-2 h-5 rounded bg-surface border border-border flex items-center px-2">
            <span className="font-mono text-xs text-muted truncate">
              {project.live === '#' ? 'localhost:3000' : project.live}
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div
        className="flex-1 mx-6 my-5 rounded-xl p-6 relative overflow-hidden min-h-[140px]"
        style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)` }}
      >
        <div className="absolute top-3 right-3 font-mono text-6xl font-bold opacity-5" style={{ color: project.color }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border"
          style={{ color: project.color, borderColor: `${project.color}30`, backgroundColor: `${project.color}10` }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
          {project.subtitle}
        </div>
        <h3 className="font-syne font-bold text-2xl text-text mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs text-text-dim font-mono">✓ {h}</span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pb-4">
        <p className="text-text-dim text-sm leading-relaxed">{project.description}</p>
      </div>

      {/* Tech tags */}
      <div className="px-6 pb-5">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface border border-border text-text-dim">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="px-6 pb-6 flex gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-text-dim hover:text-text border border-border hover:border-accent/40 px-4 py-2 rounded-lg transition-all duration-200"
        >
          <FiGithub size={15} /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
          style={{
            color: project.color,
            border: `1px solid ${project.color}30`,
            backgroundColor: `${project.color}08`,
          }}
        >
          <FiExternalLink size={15} /> Live Demo
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Featured']
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-3">03 / Projects</p>
              <h2 className="section-title text-4xl sm:text-5xl">
                Things I've<br />
                <span className="text-gradient">built & shipped</span>
              </h2>
            </div>
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filter === f
                      ? 'bg-accent text-white'
                      : 'border border-border text-text-dim hover:text-text'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/MUNEEB-AYYAN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FiGithub size={16} /> View All on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
