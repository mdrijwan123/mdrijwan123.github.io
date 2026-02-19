import { useState, useEffect } from 'react'
import './Hero.css'
import { FiGithub, FiLinkedin, FiYoutube, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'

const roles = [
    'Senior MLOps Engineer',
    'LLMOps Practitioner',
    'Big Data Architect',
    'Python Expert',
    'Tech YouTuber',
]

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIdx, setCharIdx] = useState(0)

    useEffect(() => {
        const current = roles[roleIdx]
        let timeout

        if (!isDeleting && charIdx <= current.length) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx))
                setCharIdx(c => c + 1)
            }, 80)
        } else if (!isDeleting && charIdx > current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800)
        } else if (isDeleting && charIdx >= 0) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx))
                setCharIdx(c => c - 1)
            }, 40)
        } else {
            setIsDeleting(false)
            setRoleIdx(i => (i + 1) % roles.length)
            setCharIdx(0)
        }

        return () => clearTimeout(timeout)
    }, [charIdx, isDeleting, roleIdx])

    return (
        <section id="hero" className="hero">
            {/* Animated orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Grid overlay */}
            <div className="hero-grid" />

            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="badge-dot" />
                    Available for new opportunities
                </div>

                <h1 className="hero-name">
                    Mohammed<br />
                    <span className="gradient-text">Rijwan</span>
                </h1>

                <div className="hero-role">
                    <span className="role-prefix">{'> '}</span>
                    <span className="role-text">{displayed}</span>
                    <span className="cursor">|</span>
                </div>

                <p className="hero-bio">
                    MLOps & DataOps practitioner with <strong>7+ years</strong> building and scaling
                    production ML systems. Currently driving MLOps capabilities at{' '}
                    <span className="highlight">Dunnhumby</span>. Passionate about bridging the gap
                    between data science and production engineering.
                </p>

                <div className="hero-stats">
                    {[
                        { num: '7+', label: 'Years Experience' },
                        { num: '100+', label: 'ML Pipelines Built' },
                        { num: '350', label: 'TPS Achieved' },
                        { num: '4.5K+', label: 'LinkedIn Followers' },
                    ].map(s => (
                        <div key={s.label} className="stat-item">
                            <span className="stat-num gradient-text">{s.num}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="hero-actions">
                    <a href="#contact" className="btn-primary">
                        <FiMail size={18} /> Get in Touch
                    </a>
                    <a
                        href="/Mohammed_Rijwan_Resume.pdf"
                        download="Mohammed_Rijwan_Resume.pdf"
                        className="btn-download"
                    >
                        <FiDownload size={18} /> Download Resume
                    </a>
                    <a href="#experience" className="btn-outline">
                        View Experience
                    </a>
                </div>

                <div className="hero-socials">
                    {[
                        { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/mohammed-rijwan-60074a119/', label: 'LinkedIn' },
                        { icon: <FiGithub />, url: 'https://github.com/mdrijwan123', label: 'GitHub' },
                        { icon: <FiYoutube />, url: 'https://youtube.com/thinkwithriz', label: 'YouTube' },
                        { icon: <FiMail />, url: 'mailto:md1994rijwan@gmail.com', label: 'Email' },
                    ].map(s => (
                        <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                            className="social-icon" aria-label={s.label}>
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

            <a href="#about" className="scroll-down">
                <FiArrowDown size={20} />
                <span>Scroll to explore</span>
            </a>
        </section>
    )
}
