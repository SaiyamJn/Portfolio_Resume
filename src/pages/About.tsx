import { useNavigate } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';
import TopNav from '../components/TopNav';

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <AnimatedBlobBackground />
      <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <TopNav />

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '6rem 1.5rem 3.5rem', position: 'relative', zIndex: 1 }}>
        <ResumeSection title="About" description="Get to know me better.">
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div
              style={{
                padding: '2rem',
                borderRadius: 18,
                border: '1px solid #dce3ec',
                background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
                boxShadow: '0 12px 32px rgba(15,23,42,0.08)'
              }}
            >
              <h4 style={{ margin: '0 0 1rem', color: '#0f172a', fontWeight: 600, fontSize: '1.3rem' }}>
                Education
              </h4>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: 14,
                    border: '1px solid #e2e8f0',
                    background: 'rgba(14,165,233,0.04)'
                  }}
                >
                  <p style={{ margin: 0, color: '#0f172a', fontWeight: 700 }}>
                    RV Institute of Technology and Management
                  </p>
                  <p style={{ margin: '0.15rem 0', color: '#475569' }}>
                    B.E. in Computer Science and Engineering — CGPA: 9.26
                  </p>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.92rem' }}>2023 — Expected 2027</p>
                </div>
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: 14,
                    border: '1px solid #e2e8f0',
                    background: 'rgba(14,165,233,0.02)'
                  }}
                >
                  <p style={{ margin: 0, color: '#0f172a', fontWeight: 700 }}>
                    Ryan International School, Bengaluru
                  </p>
                  <p style={{ margin: '0.15rem 0', color: '#475569' }}>CBSE — Percentage: 78%</p>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.92rem' }}>2021 — 2023</p>
                </div>
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: 14,
                    border: '1px solid #e2e8f0',
                    background: 'rgba(14,165,233,0.02)'
                  }}
                >
                  <p style={{ margin: 0, color: '#0f172a', fontWeight: 700 }}>
                    Dream World School, Ballari
                  </p>
                  <p style={{ margin: '0.15rem 0', color: '#475569' }}>CBSE — Percentage: 90.5%</p>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.92rem' }}>2011 — 2021</p>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '2rem',
                borderRadius: 18,
                border: '1px solid #dce3ec',
                background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
                boxShadow: '0 12px 32px rgba(15,23,42,0.08)'
              }}
            >
              <h4 style={{ margin: '0 0 1rem', color: '#0f172a', fontWeight: 600, fontSize: '1.3rem' }}>
                Contact
              </h4>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>✉</span>
                  <a
                    href="mailto:saiyam983@gmail.com"
                    style={{ color: '#2563eb', fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}
                  >
                    saiyam983@gmail.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>☎</span>
                  <a
                    href="tel:+918660528056"
                    style={{ color: '#2563eb', fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}
                  >
                    +91 86605 28056
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#0f172a', fontSize: '1rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📍</span>
                  <span>Bengaluru, India</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <a
                    href="https://github.com/saiyam"
                    style={{ color: '#2563eb', fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/saiyam"
                    style={{ color: '#2563eb', fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ResumeSection>
      </main>
    </div>
    </>
  );
};

export default About;

