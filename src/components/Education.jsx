import './Education.css'
import { FiAward } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const education = [
    {
        degree: 'B.Tech — Electronics & Communication Engineering',
        school: 'Dr. B R Ambedkar NIT, Jalandhar',
        period: '2014 – 2018',
        grade: 'CGPA: 7.07',
        icon: '🎓',
        color: '#00d4ff',
        highlights: [
            'Active member of Robotics Society — organised workshops on Arduino, Multisim, Robotics',
            'Campus Ambassador of RCPL India',
            'Placement Coordinator for Electronics Department (70+ companies)',
        ],
    },
    {
        degree: '12th — CBSE',
        school: 'Kendriya Vidyalaya No.5, Bathinda Cantt, Punjab',
        period: '2012 – 2013',
        grade: 'Aggregate: 88%',
        icon: '🏫',
        color: '#7b2fff',
        highlights: [
            'Head Boy — discipline and extra-curricular activities',
            'Topped class twice (11th and 12th)',
            '2nd position in Inter-school Science Quiz Competition',
        ],
    },
    {
        degree: '10th — CBSE',
        school: 'Kendriya Vidyalaya No.5, Bathinda Cantt, Punjab',
        period: '2010 – 2011',
        grade: 'CGPA: 9.8 / 10',
        icon: '📚',
        color: '#ff2d78',
        highlights: [],
    },
]

const certs = [
    {
        name: 'Introduction to ML in Production',
        issuer: 'DeepLearning.AI',
        date: 'Feb 2023',
        id: 'CW5VFC58WF95',
        icon: '🤖',
        color: '#00d4ff',
    },
    {
        name: 'TensorFlow for AI, ML & Deep Learning',
        issuer: 'DeepLearning.AI',
        date: 'Mar 2023',
        id: '63TH6AM45STE',
        icon: '🔷',
        color: '#7b2fff',
    },
    {
        name: 'Neural Network & Deep Learning',
        issuer: 'Stanford / Coursera',
        date: '',
        id: 'JNEHVGK2YWYZ',
        icon: '🧠',
        color: '#ff2d78',
    },
    {
        name: 'Machine Learning A to Z',
        issuer: 'Udemy',
        date: '',
        id: 'UC-F3B5161C',
        icon: '⚡',
        color: '#00ffb3',
    },
    {
        name: 'Machine Learning',
        issuer: 'Stanford / Coursera',
        date: '',
        id: 'JRCMT7TCX2M5',
        icon: '📐',
        color: '#f59e0b',
    },
    {
        name: 'Python for Data Science',
        issuer: 'LinkedIn Learning',
        date: '',
        id: '',
        icon: '🐍',
        color: '#6366f1',
    },
]

const awards = [
    { title: '1st Prize — Autonomous Robotics', event: 'Line Follower, UIET Chandigarh', year: 'Mar 2016', emoji: '🥇' },
    { title: '1st Prize — Manual Robotics', event: 'Robo-Fifa, DAVIET Jalandhar', year: 'Mar 2016', emoji: '🥇' },
    { title: 'TechGig Python Rank #217', event: 'of 66,818 participants · 99.68% Quotient', year: '', emoji: '🏆' },
    { title: 'Reached Semifinals — TechGig Coding', event: '150,000+ participants nationwide', year: '', emoji: '🎯' },
]

export default function Education() {
    const ref = useScrollReveal()

    return (
        <section id="education" ref={ref}>
            <div className="container">
                <p className="section-tag reveal"><span className="section-num">05 /</span> Learning Journey</p>
                <h2 className="section-title reveal">Education & Certifications</h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">Academic foundations and continuous professional upskilling</p>

                {/* Education */}
                <div className="edu-grid">
                    {education.map((e, i) => (
                        <div key={i} className={`edu-card glass-card reveal reveal-delay-${i + 1}`} style={{ '--ecolor': e.color }}>
                            <div className="edu-icon">{e.icon}</div>
                            <div>
                                <h3>{e.degree}</h3>
                                <p className="edu-school">{e.school}</p>
                                <div className="edu-meta">
                                    <span>📅 {e.period}</span>
                                    <span className="edu-grade">🎯 {e.grade}</span>
                                </div>
                                {e.highlights.length > 0 && (
                                    <ul className="edu-highlights">
                                        {e.highlights.map(h => <li key={h}>{h}</li>)}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certs */}
                <h3 className="sub-heading reveal">Licenses & Certifications</h3>
                <div className="certs-grid">
                    {certs.map((c, i) => (
                        <div key={i} className={`cert-card glass-card reveal reveal-scale reveal-delay-${Math.min(i + 1, 6)}`} style={{ '--ccolor': c.color }}>
                            <span className="cert-icon">{c.icon}</span>
                            <div className="cert-body">
                                <h4>{c.name}</h4>
                                <p>{c.issuer} {c.date && `· ${c.date}`}</p>
                                {c.id && <p className="cert-id">ID: {c.id}</p>}
                            </div>
                            <FiAward className="cert-badge" />
                        </div>
                    ))}
                </div>

                {/* Awards */}
                <h3 className="sub-heading reveal">Honors & Awards</h3>
                <div className="awards-grid">
                    {awards.map((a, i) => (
                        <div key={i} className={`award-card glass-card reveal reveal-scale reveal-delay-${i + 1}`}>
                            <span className="award-emoji">{a.emoji}</span>
                            <div>
                                <h4>{a.title}</h4>
                                <p>{a.event}</p>
                                {a.year && <p className="award-year">{a.year}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
