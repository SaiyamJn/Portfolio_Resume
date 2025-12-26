import { useNavigate } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';
import TopNav from '../components/TopNav';

const Skills = () => {
  const navigate = useNavigate();

  const skills = {
    languages: ['C++', 'JavaScript (ES6+)', 'SQL', 'C', 'Python', 'Java (Basics)', 'HTML5', 'CSS3'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'React Native (Basics)', 'Tailwind CSS', 'REST APIs', 'Webhooks'],
    cloud: ['MongoDB', 'Firebase', 'NoSQL', 'SQLite3'],
    tools: [
      'Git & GitHub',
      'VS Code',
      'Cursor',
      'Postman',
      'Vercel',
      'Vite',
      'Figma',
      'Expo',
      'Adobe Premiere Pro',
      'After Effects',
      'Photoshop',
      'Illustrator',
      'Canva'
    ],
    interests: [
      'AI-Powered Product Development',
      'Full-stack Development',
      'Product Engineering',
      'Scalable Web Architecture'
    ],
    soft: ['Problem Solving', 'Leadership', 'Adaptability', 'Team Collaboration']
  };

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
        <ResumeSection title="Skills & Interests" description="Stacks, tools, and topics I focus on.">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
              gap: '1rem'
            }}
          >
            {Object.entries(skills).map(([key, value]) => (
              <div
                key={key}
                style={{
                  border: '1px solid #dce3ec',
                  borderRadius: 14,
                  padding: '1rem',
                  background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(2,132,199,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <p
                  style={{
                    color: '#0f172a',
                    margin: '0 0 0.5rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem'
                  }}
                >
                  {key.replace(/([A-Z])/g, ' $1')}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {value.map((item) => (
                    <span
                      key={item}
                      style={{
                        border: '1px solid #dce3ec',
                        color: '#0f172a',
                        borderRadius: 999,
                        padding: '0.38rem 0.82rem',
                        fontSize: '0.86rem',
                        background: 'rgba(14,165,233,0.08)'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>
      </main>
    </div>
    </>
  );
};

export default Skills;

