import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/40"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Availability badge */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-mono text-xs text-text-dim tracking-wide">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={item} className="mb-6">
            <h1 className="font-syne font-bold leading-[1.05] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text mb-2">
                Mohammed
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gradient">
                Muneebuddin
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm text-accent tracking-widest uppercase">
              Full Stack MERN Developer
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-text-dim text-lg sm:text-xl max-w-xl leading-relaxed mb-10 font-light"
          >
            I build fast, scalable web apps that users love —{' '}
            <span className="text-text font-normal">end to end.</span>{' '}
            3 years of shipping production MERN applications with clean code and real impact.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-14">
            <button onClick={() => scrollTo('projects')} className="btn-primary text-white flex items-center gap-2">
              View Projects <HiArrowRight size={16} />
            </button>
            <a href={personalInfo.resumeUrl} className="btn-outline flex items-center gap-2">
              <HiDownload size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-8">
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <FiLinkedin size={18} />
              </a>
            </div>

            <div className="h-6 w-px bg-border" />

            {/* Quick stats */}
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Shipped', value: '5+' },
              { label: 'Tech Stack', value: 'MERN' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-syne font-bold text-xl text-text">{stat.value}</div>
                <div className="font-mono text-xs text-text-dim">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
