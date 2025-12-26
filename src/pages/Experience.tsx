import { useNavigate } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';
import TopNav from '../components/TopNav';
import capablAssistantshipCert from '../../assets/Certificates/Capabl Assistantship.png';

type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
  certificateSrc?: string;
};

const Experience = () => {
  const navigate = useNavigate();

  const experiences: Experience[] = [
    {
      company: 'Capabl (Virtual Internship)',
      role: 'AI Agentic Development Intern',
      location: 'Bengaluru',
      date: 'Oct 2025 — December 2025',
      bullets: [
        'Built an agentic financial analysis system to automate risk evaluation and reporting, reducing manual workload by ~40%.',
        'Linked ML-driven prompt optimization with Google Gemini APIs and LangChain workflows for higher agent accuracy.',
        'Created modular React + Tailwind components for internal tools, improving reuse across multiple projects.',
        'Contributed to sprint planning, architecture reviews, and prompt optimization flows to lift accuracy by ~20%.'
      ],
      // certificateSrc: capablAssistantshipCert
    },
    {
      company: 'Capabl',
      role: 'AgenticAI Saksham - Assistantship',
      location: 'Bengaluru',
      date: '2025',
      bullets: [
        'Served as an assistant for the AhenticAI Saksham program, supporting learners building agentic AI projects.',
        'Helped debug prompts and workflows, shared best practices, and supported hands-on labs and reviews.',
        'Collaborated with the core team to refine learning material and keep projects aligned with real-world use cases.'
      ],
      certificateSrc: capablAssistantshipCert
    }
  ];

  const listStyle = {
    color: '#1f2937',
    margin: 0,
    paddingLeft: '1.1rem',
    lineHeight: 1.7
  } as const;

  return (
    <>
      <AnimatedBlobBackground />
      <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: 'transparent',
        overflow: 'hidden'
      }}
    >
      <TopNav />

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '6rem 1.5rem 3.5rem', position: 'relative', zIndex: 1 }}>
        <ResumeSection title="Experience" description="Hands-on work where code meets users.">
          {experiences.map((exp) => (
          <div
            key={exp.company}
            style={{
              display: 'grid',
              gap: '1.25rem',
              padding: '1.1rem 1.2rem',
              borderRadius: 12,
              border: '1px solid #dce3ec',
              background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
              boxShadow: '0 12px 32px rgba(15,23,42,0.08)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              marginBottom: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 18px 40px rgba(2,132,199,0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,23,42,0.08)';
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: exp.certificateSrc ? 'minmax(0, 3fr) auto' : '1fr',
                gap: exp.certificateSrc ? '1rem' : '1.25rem',
                alignItems: 'center'
              }}
            >
              {/* Text content */}
              <div>
                <h4
                  style={{
                    margin: 0,
                    color: '#0f172a',
                    fontWeight: 500,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {exp.role}
                </h4>
                <p
                  style={{
                    margin: '0.25rem 0 0.35rem',
                    color: '#475569',
                    fontSize: '0.96rem',
                    fontWeight: 500
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}
                >
                  {exp.location} · {exp.date}
                </p>

                <ul style={{ ...listStyle, marginTop: '0.6rem' }}>
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Certificate preview */}
              {exp.certificateSrc && (
                <div
                  style={{
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}
                >
                  <a
                    href={exp.certificateSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block'
                    }}
                  >
                    <img
                      src={exp.certificateSrc}
                      alt={`${exp.company} certificate`}
                      style={{
                        width: '250px',
                        height: 'auto',
                        maxHeight: '180px',
                        display: 'block',
                        objectFit: 'contain',
                        marginLeft: '20px'
                      }}
                    />
                  </a>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', textAlign: 'right' }}>
                    Click to view full certificate
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
        </ResumeSection>
      </main>
    </div>
    </>
  );
};

export default Experience;

