import './About.css'
import { FiYoutube, FiExternalLink } from 'react-icons/fi'
import { SiKaggle } from 'react-icons/si'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
    const ref = useScrollReveal()

    return (
        <section id="about" ref={ref}>
            <div className="container">
                <p className="section-tag reveal"><span className="section-num">01 /</span> Who am I</p>
                <h2 className="section-title reveal">About Me</h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">A little bit of everything that makes me, me.</p>

                <div className="about-grid">
                    {/* Left: bio */}
                    <div className="about-bio glass-card reveal reveal-left">
                        <div className="about-avatar">
                            <div className="avatar-ring">
                                <div className="avatar-initials">MR</div>
                            </div>
                            <div className="avatar-status">
                                <span className="badge-dot" style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
                                Open to Work
                            </div>
                        </div>

                        <h3>Mohammed Rijwan</h3>
                        <p className="about-title gradient-text">Senior MLOps Engineer @ Dunnhumby</p>
                        <p className="about-location">📍 Gurugram, Haryana, India</p>

                        <p className="about-desc">
                            Best at Googling! An MLOps and DataOps practitioner who loves to code during weekends.
                            With <strong>7+ years</strong> of experience building and scaling production-grade
                            machine learning systems, I've worked across the full spectrum — from data ingestion
                            pipelines to real-time model serving at scale.
                        </p>
                        <p className="about-desc">
                            I believe in gaining knowledge every day and sharing it through any medium — whether
                            that's writing, teaching, or making YouTube videos under <strong>"Think with Riz"</strong>.
                        </p>

                        <div className="about-contacts">
                            <a href="mailto:md1994rijwan@gmail.com" className="contact-pill">
                                ✉️ md1994rijwan@gmail.com
                            </a>
                            <a href="tel:+917045226525" className="contact-pill">
                                📱 +91 7045226525
                            </a>
                        </div>
                    </div>

                    {/* Right: highlights */}
                    <div className="about-highlights">
                        {/* TechGig */}
                        <div className="highlight-card glass-card reveal reveal-right reveal-delay-1">
                            <div className="hl-icon" style={{ background: 'linear-gradient(135deg,#ff6b35,#f7931e)' }}>
                                🏆
                            </div>
                            <div>
                                <h4>TechGig Python Champion</h4>
                                <p>Skill Quotient <strong>99.68%</strong></p>
                                <p className="hl-sub">Ranked <strong>#217</strong> of 66,818 participants</p>
                            </div>
                        </div>

                        {/* YouTube */}
                        <a className="highlight-card glass-card reveal reveal-right reveal-delay-2" href="https://youtube.com/thinkwithriz" target="_blank" rel="noreferrer">
                            <div className="hl-icon" style={{ background: 'linear-gradient(135deg,#ff0000,#cc0000)' }}>
                                <FiYoutube />
                            </div>
                            <div>
                                <h4>Think with Riz <FiExternalLink size={14} /></h4>
                                <p>Tech YouTuber — ML, AI & CI/CD content</p>
                                <p className="hl-sub">Free Udemy course with <strong>3000+ enrollments</strong></p>
                            </div>
                        </a>

                        {/* Kaggle */}
                        <div className="highlight-card glass-card reveal reveal-right reveal-delay-3">
                            <div className="hl-icon" style={{ background: 'linear-gradient(135deg,#20beff,#0085ca)' }}>
                                <SiKaggle />
                            </div>
                            <div>
                                <h4>Kaggle Practitioner</h4>
                                <p>House Price Prediction, Medical Treatment Classification</p>
                                <p className="hl-sub">ML competitions & projects</p>
                            </div>
                        </div>

                        {/* Recommendation */}
                        <div className="highlight-card glass-card recommend-card reveal reveal-right reveal-delay-4">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">
                                Rijwan is one of the best Machine Learning engineers I have ever worked with.
                                He solved complex problems in short time and was instrumental in deploying
                                a real-time ML serving solution.
                            </p>
                            <div className="quote-author">
                                <div>
                                    <strong>Hari Prasad</strong>
                                    <span>Director of Engineering — ML Operations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
