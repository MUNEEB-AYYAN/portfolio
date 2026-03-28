import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-mono font-bold">M</div>
            <span className="font-syne font-semibold text-text">Mohammed Muneebuddin</span>
          </div>

          <p className="font-mono text-xs text-muted order-last sm:order-none">
            © {year} · Built with React + Tailwind
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: personalInfo.github },
              { icon: FiLinkedin, href: personalInfo.linkedin },
              { icon: FiMail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
