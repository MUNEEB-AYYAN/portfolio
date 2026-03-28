import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Loading screen
function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Animated M logo */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.2, repeat: 1, ease: 'easeInOut' }}
          >
            <span className="font-syne font-bold text-white text-2xl">M</span>
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-2xl bg-accent"
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-border overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            onAnimationComplete={onDone}
          />
        </div>

        <motion.p
          className="font-mono text-xs text-muted tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          LOADING PORTFOLIO
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

// Scroll-to-top button
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-40 w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-accent hover:scale-110 transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-bg"
        >
          <Navbar />
          <main>
            <Hero />
            <div className="glow-line" />
            <About />
            <div className="glow-line" />
            <Skills />
            <div className="glow-line" />
            <Projects />
            <div className="glow-line" />
            <Experience />
            <div className="glow-line" />
            <Contact />
          </main>
          <Footer />
          <ScrollTop />
        </motion.div>
      )}
    </>
  )
}
