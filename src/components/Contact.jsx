import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function Input({ label, type = 'text', name, placeholder, textarea }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="space-y-2">
      <label className="font-mono text-xs text-text-dim tracking-wider uppercase">{label}</label>
      <Tag
        type={type}
        name={name}
        placeholder={placeholder}
        rows={textarea ? 5 : undefined}
        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder-muted text-sm font-light outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
      />
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to EmailJS, Formspree, or any backend here
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  const socials = [
    { icon: FiGithub, label: 'GitHub', href: personalInfo.github, handle: '@MUNEEB-AYYAN' },
    { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, handle: 'mohammed-muneebuddin-ayyan' },
    { icon: FiMail, label: 'Email', href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
  ]

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="section-label mb-3">05 / Contact</p>
            <h2 className="section-title text-4xl sm:text-5xl mb-4">
              Let's build something<br />
              <span className="text-gradient">great together</span>
            </h2>
            <p className="text-text-dim max-w-md mx-auto">
              Open to full-time roles, freelance projects, or just a good conversation about tech.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <Reveal delay={0.1}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-syne font-bold text-lg text-text mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Your Name" name="name" placeholder="John Doe" />
                  <Input label="Email" type="email" name="email" placeholder="john@example.com" />
                </div>
                <Input label="Subject" name="subject" placeholder="Let's work together!" />
                <Input label="Message" name="message" placeholder="Tell me about your project..." textarea />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full text-white flex items-center justify-center gap-2"
                >
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <><FiSend size={15} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>

          {/* Right side */}
          <div className="space-y-5">
            <Reveal delay={0.15}>
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-syne font-bold text-lg text-text mb-6">Find me on</h3>
                <div className="space-y-4">
                  {socials.map(({ icon: Icon, label, href, handle }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-200">
                        <Icon size={17} className="text-text-dim group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">{label}</p>
                        <p className="text-xs font-mono text-muted truncate max-w-[220px]">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-accent/10 to-purple-600/5 rounded-2xl border border-accent/20 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="font-mono text-xs text-green-400">Available now</span>
                  </div>
                  <h4 className="font-syne font-bold text-xl text-text mb-2">Ready to join your team</h4>
                  <p className="text-sm text-text-dim leading-relaxed">
                    Looking for a MERN developer who takes ownership, writes clean code, and ships fast?
                    Let's talk.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
