import './Experience.css'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const experiences = [
    {
        company: 'Dunnhumby',
        logo: '🦅',
        color: '#00d4ff',
        role: 'Senior Engineer (MLOps)',
        type: 'Full-time',
        period: 'Jul 2025 – Present',
        duration: '8 mos',
        location: 'Gurugram, Haryana, India',
        mode: 'On-site',
        current: true,
        points: [
            'Driving MLOps & DevOps capability initiatives for the Data Science team at a global retail data analytics leader.',
            'Establishing ML lifecycle standards, pipeline orchestration frameworks, and production monitoring infrastructure.',
            'Collaborating cross-functionally with data scientists and platform engineers to accelerate model delivery.',
        ],
        tags: ['MLOps', 'LLMOps', 'DataOps', 'CI/CD', 'Azure'],
    },
    {
        company: 'Tiger Analytics',
        logo: '🐯',
        color: '#7b2fff',
        role: 'Senior MLOps Engineer',
        type: 'Full-time',
        period: 'Jul 2024 – Jul 2025',
        duration: '1 yr 1 mo',
        location: 'Hyderabad, India',
        mode: 'Remote',
        current: false,
        points: [
            'Developed and managed 100+ production-grade model & data monitoring pipelines including data and concept drift detection for a Fortune 500 retail client.',
            "Implemented fail-safe, highly observable systems giving full visibility into every production model's status.",
            'Optimized pipeline efficiency resulting in significant reduction in infrastructure cost and improved SLA adherence.',
        ],
        tags: ['Apache Spark', 'Azure Databricks', 'MLflow', 'Python', 'Monitoring'],
    },
    {
        company: 'Tiger Analytics',
        logo: '🐯',
        color: '#7b2fff',
        role: 'MLOps Engineer',
        type: 'Full-time',
        period: 'Jul 2022 – Aug 2024',
        duration: '2 yrs 2 mos',
        location: 'Hyderabad, India',
        mode: 'Remote',
        current: false,
        points: [
            'Led MLOps team (10 members) using agile methodology to plan, build, and deploy end-to-end data + ML pipelines at scale for Fortune 500 retail clients.',
            'Gathered and processed large retail customer datasets, creating robust batch data pipelines trained and orchestrated on Azure Databricks with minimum cost.',
            'Built data drift pipeline, model monitoring infrastructure, and full CI/CD automation for the entire project.',
        ],
        tags: ['MLflow', 'Python', 'Databricks', 'Azure DevOps', 'Spark', 'Kubernetes'],
    },
    {
        company: 'Tiger Analytics',
        logo: '🐯',
        color: '#7b2fff',
        role: 'Senior Analyst',
        type: 'Full-time',
        period: 'Jun 2021 – Jul 2022',
        duration: '1 yr 2 mos',
        location: 'Hyderabad, India',
        mode: 'Remote',
        current: false,
        points: [
            'Planned and built an end-to-end real-time ML product ranking service delivering recommended products in real time.',
            'Packaged model with ONNX artifact; deployed on Kubernetes with Docker containerisation, vertical & horizontal load balancing.',
            'Achieved 350 TPS with less than 150ms latency — setting the production performance benchmark for the team.',
        ],
        tags: ['Kubernetes', 'Docker', 'ONNX', 'FastAPI', 'MLflow', 'Real-time Serving'],
    },
    {
        company: 'Jio (Reliance Industries)',
        logo: '📡',
        color: '#ff2d78',
        role: 'Technical Team Lead — Data Services',
        type: 'Full-time',
        period: 'Nov 2020 – Jun 2021',
        duration: '8 mos',
        location: 'Maharashtra, India',
        mode: 'On-site',
        current: false,
        points: [
            'SPOC for platform data solution — ingestion framework (MySQL, SAP HANA, PostgreSQL, MongoDB, REST API → Datalake) and distribution framework (Datalake → multiple targets).',
            'Developed and managed solutions for data requests from various platform teams across the organisation.',
        ],
        tags: ['Hadoop', 'Python', 'REST API', 'Data Pipelines'],
    },
    {
        company: 'Jio (Reliance Industries)',
        logo: '📡',
        color: '#ff2d78',
        role: 'Data / Analytics Engineer',
        type: 'Full-time',
        period: 'Aug 2019 – Jun 2021',
        duration: '1 yr 11 mos',
        location: 'Mumbai Metropolitan Region',
        mode: 'On-site',
        current: false,
        points: [
            'Built Python RESTful APIs for the Data Engineering Framework using Flask; deployed on Hive-backed infrastructure.',
            'Data prep, wrangling, dashboards, statistical inference, clustering, regression & classification using Python.',
            'Used Airflow, Docker, GIT, CI/CD pipelines, Flask, Spark, Scikit-Learn, Keras.',
        ],
        tags: ['Python', 'Flask', 'Spark', 'Airflow', 'Docker', 'Hadoop'],
    },
    {
        company: 'Jio (Reliance Industries)',
        logo: '📡',
        color: '#ff2d78',
        role: 'Graduate Engineering Trainee',
        type: 'Full-time',
        period: 'Jul 2018 – Jul 2019',
        duration: '1 yr 1 mo',
        location: 'Navi Mumbai, India',
        mode: 'On-site',
        current: false,
        points: [
            'Full-Stack / DevOps / Data Analytics rotation program; coordinated with business leaders to turn requirements into solutions.',
            'Built transformer fault analysis tool on JavaScript reporting platform; developed microservices for automated GitLab integration.',
            'Deployed APIs on Kubernetes cluster using Jenkins pipelines and Docker; built ML/DL use cases (NLP, data mining, association rules).',
        ],
        tags: ['Python', 'Flask', 'Docker', 'Kubernetes', 'Jenkins', 'ML'],
    },
]

export default function Experience() {
    const ref = useScrollReveal()

    return (
        <section id="experience" ref={ref}>
            <div className="container">
                <p className="section-tag reveal"><span className="section-num">02 /</span> Career Journey</p>
                <h2 className="section-title reveal">Work Experience</h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">7+ years of building real-world ML systems at scale</p>

                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`timeline-item reveal ${exp.current ? 'current' : ''}`}
                            style={{ '--accent': exp.color }}
                        >
                            <div className="timeline-dot">
                                <span>{exp.logo}</span>
                            </div>

                            <div className="timeline-card glass-card">
                                <div className="exp-header">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <p className="exp-company">{exp.company}</p>
                                    </div>
                                    {exp.current && <span className="current-badge">Current</span>}
                                </div>

                                <div className="exp-meta">
                                    <span><FiCalendar size={13} /> {exp.period} · {exp.duration}</span>
                                    <span><FiMapPin size={13} /> {exp.location} · {exp.mode}</span>
                                    <span><FiBriefcase size={13} /> {exp.type}</span>
                                </div>

                                <ul className="exp-points">
                                    {exp.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>

                                <div className="exp-tags">
                                    {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
