import { useState, useEffect, useRef } from 'react'
import './Skills.css'

const skillGroups = [
    {
        category: 'MLOps & DevOps',
        icon: '⚙️',
        color: '#00d4ff',
        skills: [
            { name: 'MLflow', level: 95 },
            { name: 'Kubernetes', level: 90 },
            { name: 'Docker', level: 92 },
            { name: 'CI/CD (AzDevOps/Jenkins)', level: 88 },
            { name: 'Feature Store (Feast)', level: 85 },
            { name: 'LLMOps', level: 80 },
        ],
    },
    {
        category: 'Cloud & Infrastructure',
        icon: '☁️',
        color: '#7b2fff',
        skills: [
            { name: 'Azure Databricks', level: 93 },
            { name: 'Azure Data Factory', level: 88 },
            { name: 'Azure DevOps', level: 87 },
            { name: 'Azure Data Lake', level: 86 },
            { name: 'Terraform (IaC)', level: 70 },
        ],
    },
    {
        category: 'Programming & Data',
        icon: '💻',
        color: '#ff2d78',
        skills: [
            { name: 'Python', level: 97 },
            { name: 'PySpark / Spark', level: 90 },
            { name: 'SQL', level: 88 },
            { name: 'FastAPI / Flask', level: 85 },
            { name: 'Shell Scripting', level: 80 },
        ],
    },
    {
        category: 'Machine Learning',
        icon: '🧠',
        color: '#00ffb3',
        skills: [
            { name: 'Machine Learning', level: 90 },
            { name: 'Deep Learning / Neural Nets', level: 85 },
            { name: 'NLP / LLMs', level: 82 },
            { name: 'ONNX Model Packaging', level: 88 },
            { name: 'TensorFlow / Keras', level: 80 },
        ],
    },
]

const techTags = [
    'Python', 'PySpark', 'Hadoop', 'Spark SQL', 'MLflow', 'Feast',
    'Docker', 'Kubernetes', 'FastAPI', 'Flask', 'REST API', 'Git',
    'Azure', 'Databricks', 'ADF', 'Azure DevOps', 'ONNX', 'Redis',
    'Airflow', 'Jenkins', 'Grafana', 'Prometheus', 'Scikit-Learn',
    'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'LLMOps', 'CI/CD',
]

export default function Skills() {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    // Observe when skills section enters viewport and trigger bar animations
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" ref={sectionRef}>
            <div className="container">
                <p className={`section-tag reveal ${visible ? 'revealed' : ''}`}>
                    <span className="section-num">03 /</span> Tech Stack
                </p>
                <h2 className={`section-title reveal ${visible ? 'revealed' : ''}`}>Skills & Expertise</h2>
                <div className={`divider reveal ${visible ? 'revealed' : ''}`} />
                <p className={`section-subtitle reveal ${visible ? 'revealed' : ''}`}>
                    Technologies and tools I work with daily in production
                </p>

                <div className="skills-grid">
                    {skillGroups.map((group, gi) => (
                        <div
                            key={group.category}
                            className={`skill-group glass-card reveal ${visible ? 'revealed' : ''}`}
                            style={{
                                '--gcolor': group.color,
                                transitionDelay: `${gi * 0.15}s`,
                            }}
                        >
                            <div className="skill-group-header">
                                <span className="skill-icon">{group.icon}</span>
                                <h3>{group.category}</h3>
                            </div>
                            <div className="skill-bars">
                                {group.skills.map((skill, si) => (
                                    <div key={skill.name} className="skill-bar-item">
                                        <div className="skill-bar-label">
                                            <span>{skill.name}</span>
                                            <span className="skill-pct">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-track">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: visible ? `${skill.level}%` : '0%',
                                                    background: `linear-gradient(90deg, ${group.color}, ${group.color}99)`,
                                                    transitionDelay: `${gi * 0.15 + si * 0.08}s`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`tech-cloud reveal ${visible ? 'revealed' : ''}`} style={{ transitionDelay: '0.5s' }}>
                    <h3>Full Tech Ecosystem</h3>
                    <div className="tags-wrap">
                        {techTags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
