import { useNavigate } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';
import TopNav from '../components/TopNav';

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      title: 'Research & Publications',
      items: [
        'Research publication in Theoretical Computer Science (Q2) (2024–2025).',
        'Research publication in NCDTE conference (2024–2025).'
      ]
    },
    {
      title: 'Awards',
      items: ['Best Paper Presentation Award, NCDTE 2024.']
    },
    {
      title: 'Competitions',
      items: ['Winner, Intercollege Graphic Designing and Video Editing competition (2024).']
    },
    {
      title: 'Certifications',
      items: ['Web Development Bootcamp 2025; A–Z Machine Learning in Python and R (Udemy, 2025).']
    },
    {
      title: 'Workshops',
      items: ['Agentic AI Saksham; Introduction to Cybersecurity (2025).']
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
        <ResumeSection title="Achievements" description="Recognitions, certifications, and milestones.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {achievements.map((group) => (
              <div
                key={group.title}
                style={{
                  border: '1px solid #dce3ec',
                  borderRadius: 12,
                  padding: '1.25rem 1.5rem',
                  background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,23,42,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    color: '#0f172a',
                    fontWeight: 600,
                    fontSize: '1rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {group.title}
                </h4>
                <ul style={{ ...listStyle, margin: 0 }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>
      </main>
    </div>
    </>
  );
};

export default Achievements;

