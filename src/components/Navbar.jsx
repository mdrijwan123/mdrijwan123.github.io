import { useState, useEffect } from 'react'
import './Navbar.css'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: observe each section and update active link
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(`#${id}`)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          MR
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={() => handleClick(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Mohammed_Rijwan_Resume.pdf"
              download="Mohammed_Rijwan_Resume.pdf"
              className="nav-download"
            >
              <FiDownload size={14} /> Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohammed-rijwan-60074a119/"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button className="menu-toggle" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  )
}
