import './Contact.css'
import { FiLinkedin, FiGithub, FiYoutube, FiMail, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const links = [
    {
        icon: <FiLinkedin />,
        label: 'LinkedIn',
        value: 'mohammed-rijwan-60074a119',
        url: 'https://www.linkedin.com/in/mohammed-rijwan-60074a119/',
        color: '#0077b5',
        sub: '4,557+ followers',
    },
    {
        icon: <FiGithub />,
        label: 'GitHub',
        value: 'mdrijwan123',
        url: 'https://github.com/mdrijwan123',
        color: '#6e5494',
        sub: 'Projects & code',
    },
    {
        icon: <FiYoutube />,
        label: 'YouTube',
        value: 'Think with Riz',
        url: 'https://youtube.com/thinkwithriz',
        color: '#ff0000',
        sub: 'ML, AI & CI/CD tutorials',
    },
    {
        icon: <FiMail />,
        label: 'Primary Email',
        value: 'md1994rijwan@gmail.com',
        url: 'mailto:md1994rijwan@gmail.com',
        color: '#ea4335',
        sub: 'Best way to reach me',
    },
    {
        icon: <FiMail />,
        label: 'Alt Email',
        value: 'mdrijwan786@outlook.com',
        url: 'mailto:mdrijwan786@outlook.com',
        color: '#0078d4',
        sub: 'Microsoft Outlook',
    },
    {
        icon: <FiPhone />,
        label: 'Phone',
        value: '+91 7045226525',
        url: 'tel:+917045226525',
        color: '#00ffb3',
        sub: 'Available weekdays',
    },
]

export default function Contact() {
    const ref = useScrollReveal()

    return (
        <section id="contact" ref={ref}>
            <div className="container">
                <p className="section-tag reveal"><span className="section-num">06 /</span> Let's Connect</p>
                <h2 className="section-title reveal">Get In Touch</h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">
                    Open to new opportunities, collaborations, and interesting conversations
                </p>

                <div className="contact-wrapper">
                    {/* CTA box */}
                    <div className="contact-cta glass-card reveal reveal-left">
                        <div className="cta-glow" />
                        <h3>Looking for a Senior MLOps Engineer?</h3>
                        <p>
                            I'm Mohammed Rijwan — currently at <strong>Dunnhumby</strong>, Gurugram.
                            With 7+ years in production ML systems, data engineering, and DevOps, I build
                            systems that scale reliably and cost-efficiently.
                        </p>
                        <div className="cta-detail">
                            <FiMapPin size={14} /> Gurugram, Haryana, India (Open to Relocation / Remote)
                        </div>

                        <div className="cta-btns">
                            <a href="mailto:md1994rijwan@gmail.com" className="btn-primary">
                                <FiMail size={16} /> Send Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohammed-rijwan-60074a119/"
                                target="_blank" rel="noreferrer"
                                className="btn-outline"
                            >
                                <FiLinkedin size={16} /> LinkedIn <FiExternalLink size={12} />
                            </a>
                        </div>
                    </div>

                    {/* Links grid */}
                    <div className="contact-links">
                        {links.map((l, i) => (
                            <a
                                key={l.label}
                                href={l.url}
                                target={l.url.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                className={`contact-link glass-card reveal reveal-right reveal-delay-${Math.min(i + 1, 6)}`}
                                style={{ '--lcolor': l.color }}
                            >
                                <div className="link-icon" style={{ background: `${l.color}22`, color: l.color }}>
                                    {l.icon}
                                </div>
                                <div className="link-body">
                                    <span className="link-label">{l.label}</span>
                                    <span className="link-value">{l.value}</span>
                                    <span className="link-sub">{l.sub}</span>
                                </div>
                                <FiExternalLink className="link-arrow" size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
