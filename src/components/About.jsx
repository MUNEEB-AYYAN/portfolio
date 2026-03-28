import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { personalInfo, education } from '../data/portfolio'

function SectionReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
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

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/30 to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="mb-16">
            <p className="section-label mb-3">01 / About Me</p>
            <h2 className="section-title text-4xl sm:text-5xl">
              The developer<br />
              <span className="text-gradient">behind the code</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <SectionReveal delay={0.1}>
              <p className="text-text-dim text-lg leading-relaxed">
                I'm a Full Stack MERN Developer based in Hyderabad with{' '}
                <span className="text-text font-medium">3 years of professional experience</span>{' '}
                building web applications that go from zero to production.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="text-text-dim text-lg leading-relaxed">
                At{' '}
                <span className="text-accent font-medium">Uptech Software Solutions</span>
                , I've owned the full lifecycle — from designing MongoDB schemas and building
                Express APIs to crafting React UIs that users actually enjoy using.
                I care about performance, security, and code that future developers can read.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-text-dim text-lg leading-relaxed">
                Right now I'm actively building my next-level skills in{' '}
                <span className="text-text font-medium">TypeScript, system design, and Docker</span>{' '}
                to break into product companies where engineering craft truly matters.
              </p>
            </SectionReveal>

            {/* Contact info */}
            <SectionReveal delay={0.25}>
              <div className="pt-4 space-y-3">
                {[
                  { icon: FiMapPin, text: personalInfo.location },
                  { icon: FiMail, text: personalInfo.email },
                  { icon: FiPhone, text: personalInfo.phone },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-text-dim">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <span className="text-sm font-mono">{text}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: Stats + Education */}
          <div className="space-y-6">
            {/* Stats grid */}
            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '3+', label: 'Years of Experience', icon: '🚀' },
                  { value: '5+', label: 'Apps in Production', icon: '⚡' },
                  { value: '30+', label: 'React Components Built', icon: '🧩' },
                  { value: '99%', label: 'Deployment Uptime', icon: '☁️' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
                    className="bg-card rounded-xl p-5 border border-border transition-all duration-300"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="font-syne font-bold text-2xl text-text mb-1">{stat.value}</div>
                    <div className="text-xs text-text-dim leading-snug">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>

            {/* Education card */}
            <SectionReveal delay={0.3}>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 text-lg">
                    🎓
                  </div>
                  <div>
                    <p className="font-mono text-xs text-accent tracking-wider mb-1 uppercase">Education</p>
                    <p className="font-syne font-semibold text-text mb-1">{education.degree}</p>
                    <p className="text-sm text-text-dim">{education.institution}</p>
                    <p className="text-xs font-mono text-muted mt-1">{education.period} · {education.location}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Currently learning */}
            <SectionReveal delay={0.35}>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="font-mono text-xs text-accent tracking-wider mb-3 uppercase">Currently Learning</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'System Design', 'Docker', 'DSA / LeetCode'].map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
