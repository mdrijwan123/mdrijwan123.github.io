import './Projects.css'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
    {
        title: 'Real-Time ML Product Ranking Service',
        company: 'Tiger Analytics',
        emoji: '🚀',
        color: '#00d4ff',
        description: 'End-to-end real-time ML model serving pipeline for product recommendations. Packaged model as ONNX artifact, deployed on Kubernetes with Docker, achieved 350 TPS at <150ms latency.',
        highlights: ['350 TPS achieved', '<150ms latency', 'Horizontal & vertical scaling', '40% cost saving'],
        tags: ['Kubernetes', 'Docker', 'ONNX', 'FastAPI', 'MLflow', 'Redis'],
    },
    {
        title: 'Production MLOps Pipeline (100+ Models)',
        company: 'Tiger Analytics @ Fortune 500',
        emoji: '📊',
        color: '#7b2fff',
        description: 'Developed and managed 100+ production-grade model + data pipelines with data & concept drift monitoring, fail-safe mechanisms, and full observability for a Fortune 500 retail client.',
        highlights: ['100+ prod pipelines', 'Data & concept drift', 'Full observability', 'Fail-safe design'],
        tags: ['Azure Databricks', 'MLflow', 'Spark', 'Azure DevOps', 'Python', 'Monitoring'],
    },
    {
        title: 'Batch MLOps Pipeline — Propensity Model',
        company: 'Tiger Analytics',
        emoji: '⚡',
        color: '#ff2d78',
        description: 'Operationalized a PySpark propensity model, packaged and scheduled on ADF, full CI/CD on Azure DevOps. Enhanced the complete ML lifecycle and saved 15% infrastructure cost.',
        highlights: ['15% infra cost saved', 'ADF scheduling', 'Full CI/CD', 'Spark optimization'],
        tags: ['Databricks', 'Azure Data Factory', 'Azure DevOps', 'PySpark', 'CI/CD'],
    },
    {
        title: 'Embedding-Based Propensity Model',
        company: 'Tiger Analytics',
        emoji: '🧠',
        color: '#00ffb3',
        description: 'Operationalized ingestion, feature engineering, and modeling pipeline in ADF; ran model in Databricks at scale with vector search and Agile delivery methodology.',
        highlights: ['Scaled ingestion', 'Vector search', 'Feature engineering', 'Agile methodology'],
        tags: ['Azure Databricks', 'ADF', 'Azure DevOps', 'Vector Search', 'ML'],
    },
    {
        title: 'API as a Data Source (Jio)',
        company: 'Reliance / Jio',
        emoji: '📡',
        color: '#ff6b35',
        description: 'Platform to fetch API data and dump into Hive with support for Basic, Token, Dynamic, and NTLM authentication. Enabled technical and non-technical users to push data into Hadoop.',
        highlights: ['Multi-auth support', 'Hive integration', 'Non-technical UX', 'Oct 2019 – Present'],
        tags: ['Python', 'PySpark', 'Hadoop', 'REST API', 'Shell Script'],
    },
    {
        title: 'Unified Data Distribution Framework (Jio)',
        company: 'Reliance / Jio',
        emoji: '🔗',
        color: '#f7931e',
        description: 'Framework for fetching data from Hive and distributing it via auto-generated API endpoints. Mailed curl commands directly to users for seamless data access.',
        highlights: ['Auto API generation', 'Hive distribution', 'Curl automation', 'Flask-powered'],
        tags: ['Python', 'Flask', 'Shell Script', 'Hive', 'Docker'],
    },
    {
        title: 'Spam Email Filter — NLP',
        company: 'Side Project',
        emoji: '✉️',
        color: '#a78bfa',
        description: 'NLP classification model to detect spam emails. Used TSV data with text cleaning (stopwords, punctuation, tokenisation), then Random Forest & Gradient Boosting with Grid Search CV.',
        highlights: ['Random Forest', 'Gradient Boosting', 'Grid Search CV', 'Text preprocessing'],
        tags: ['Python', 'NLP', 'Scikit-Learn', 'Machine Learning'],
        github: 'https://github.com/mdrijwan123',
    },
]

export default function Projects() {
    const ref = useScrollReveal()

    return (
        <section id="projects" ref={ref}>
            <div className="container">
                <p className="section-tag reveal"><span className="section-num">04 /</span> What I've Built</p>
                <h2 className="section-title reveal">Projects</h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">From real-time inference engines to enterprise MLOps platforms</p>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className={`project-card glass-card reveal reveal-scale reveal-delay-${Math.min(i + 1, 6)}`}
                            style={{ '--pcolor': p.color }}
                        >
                            <div className="project-header">
                                <div className="project-emoji">{p.emoji}</div>
                                <span className="project-company">{p.company}</span>
                            </div>

                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-desc">{p.description}</p>

                            <div className="project-highlights">
                                {p.highlights.map(h => (
                                    <span key={h} className="highlight-chip">{h}</span>
                                ))}
                            </div>

                            <div className="project-footer">
                                <div className="project-tags">
                                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                                <div className="project-links">
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noreferrer" className="proj-icon-btn">
                                            <FiGithub size={16} />
                                        </a>
                                    )}
                                    <a href="https://www.linkedin.com/in/mohammed-rijwan-60074a119/"
                                        target="_blank" rel="noreferrer" className="proj-icon-btn">
                                        <FiExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
