import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { FiArrowUp } from 'react-icons/fi'

export default function App() {
    const [showTop, setShowTop] = useState(false)
    const glowRef = useRef(null)

    // Back-to-top visibility
    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 600)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Mouse glow effect
    useEffect(() => {
        const handleMouse = (e) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX}px`
                glowRef.current.style.top = `${e.clientY}px`
            }
        }
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    return (
        <>
            <div className="mouse-glow" ref={glowRef} />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        Designed & built with ❤️ by{' '}
                        <a href="https://www.linkedin.com/in/mohammed-rijwan-60074a119/" target="_blank" rel="noreferrer">
                            Mohammed Rijwan
                        </a>{' '}
                        · {new Date().getFullYear()}
                    </p>
                    <p className="footer-sub">Senior MLOps Engineer · Dunnhumby · Gurugram</p>
                </div>
            </footer>

            {/* Back to top */}
            <button
                className={`back-to-top ${showTop ? 'visible' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
            >
                <FiArrowUp size={20} />
            </button>
        </>
    )
}
