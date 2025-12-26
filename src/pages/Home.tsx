import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';

const Home = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const aboutDescription = 'Learn about my educational background, journey in technology, and how I approach building products that matter. Discover my passion for AI-native development and full-stack engineering.';

  const sectionIcons = [
    { 
      id: 'experience', 
      title: 'Experience', 
      iconPath: '/icons/experience.png',
      color: '#8b5cf6'
    },
    { 
      id: 'projects', 
      title: 'Projects', 
      iconPath: '/icons/projects.png',
      color: '#10b981'
    },
    { 
      id: 'skills', 
      title: 'Skills', 
      iconPath: '/icons/skills.png',
      color: '#f59e0b'
    },
    { 
      id: 'achievements', 
      title: 'Achievements', 
      iconPath: '/icons/acheivements.png',
      color: '#ef4444'
    }
  ];

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
      <main
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '8rem 2rem 12rem'
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '-1rem',
            animation: 'slideInUp 1s ease-out'
          }}
        >
          <h1
            className="glow-text"
            style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 700,
              margin: '0 0 1rem',
              letterSpacing: '-0.05em',
              textShadow: '0 0 40px rgba(14,165,233,0.3)',
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            Saiyam N Bothra
          </h1>
          <div
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#475569',
              fontWeight: 300,
              marginBottom: '1.5rem',
              opacity: 0.9,
              animation: 'slideInUp 1s ease-out 0.2s both'
            }}
          >
            <span style={{ color: '#0ea5e9' }}>AI</span> Product & Full-Stack Builder
          </div>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
              animation: 'slideInUp 1s ease-out 0.4s both'
            }}
          >
            Engineering performant, reliable software with AI-native thinking, clean UX, and production pragmatism.
          </p>
        </div>

        {/* About Section - Expanded */}
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {/* Expanded About Content */}
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              padding: '1.5rem',
              paddingTop: '1rem',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.9)',
              border: '1px solid #dce3ec',
              boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
              animation: 'slideInUp 0.8s ease-out 0.6s both',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {/* Profile Image - Half Inside, Half Outside */}
            <div
              style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '240px',
                height: '240px',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '5px solid rgba(255,255,255,0.95)',
                boxShadow: '0 16px 50px rgba(15,23,42,0.25), 0 0 0 1px rgba(220,228,236,0.3)',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(139,92,246,0.1))',
                zIndex: 10,
                transform: 'rotate(-5deg)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-5deg) scale(1)';
              }}
            >
              <img
                src="/pfp.png"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
            
            {/* About Header */}
            <div
              style={{
                position: 'relative',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid #e2e8f0',
                paddingRight: '200px',
                paddingLeft: '25px',
                minHeight: '120px'
              }}
            >
              {/* Centered heading - positioned absolutely to center it */}
              <div style={{ 
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 200px)',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}>
                <h3
                  style={{
                    color: '#0f172a',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    margin: 0,
                    letterSpacing: '-0.02em',
                    textAlign: 'center'
                  }}
                >
                  About
                </h3>
              </div>
              {/* Description text */}
              <div style={{ width: '100%', marginTop: '2.5rem' }}>
                <p
                  style={{
                    color: '#64748b',
                    fontSize: '1rem',
                    margin: 0,
                    lineHeight: 1.6,
                    textAlign: 'justify',
                    maxWidth: '100%'
                  }}
                >
                  {aboutDescription}
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h4 style={{ margin: '0 0 0.75rem', color: '#0f172a', fontWeight: 600, fontSize: '1.3rem', textAlign: 'center' }}>
                Education
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    background: 'rgba(14,165,233,0.04)',
                    flex: '1 1 200px',
                    minWidth: '200px'
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
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    background: 'rgba(14,165,233,0.02)',
                    flex: '1 1 200px',
                    minWidth: '200px'
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
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    background: 'rgba(14,165,233,0.02)',
                    flex: '1 1 200px',
                    minWidth: '200px'
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

            {/* Hobbies Section */}
            <div>
              <h4 style={{ margin: '0 0 0.75rem', color: '#0f172a', fontWeight: 600, fontSize: '1.3rem', textAlign: 'center' }}>
                Hobbies
              </h4>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 12,
                  border: '1px solid #e2e8f0',
                  background: 'rgba(14,165,233,0.04)'
                }}
              >
                <p style={{ margin: 0, color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  <strong style={{ color: '#0f172a' }}>Photography</strong>, <strong style={{ color: '#0f172a' }}>Graphics Designing</strong>, 
                  <strong style={{ color: '#0f172a' }}> Video Editing</strong>, and <strong style={{ color: '#0f172a' }}>Hockey</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Other Sections - Just Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            maxWidth: '800px',
            width: '100%',
            padding: '2rem',
            marginTop: '1rem',
            position: 'relative'
          }}
        >
          {/* Curved Arrow pointing to Experience */}
          <div
            style={{
              position: 'absolute',
              left: '-120px',
              top: '-10%',
              zIndex: 10,
              animation: 'slideInUp 0.8s ease-out 1s both',
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.5rem'
            }}
          >
            <span
              style={{
                color: 'rgb(27, 27, 27)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                textShadow: '0 2px 8px rgba(255,255,255,0.8)',
                animation: 'floatDiagonal 3s ease-in-out infinite'
              }}
            >
              Explore more about me!!
            </span>
            <img
              src="/icons/curvedarrow.png"
              alt="Arrow"
              style={{
                width: '100px',
                height: 'auto',
                filter: 'drop-shadow(0 2px 8px rgba(139,92,246,0.3))',
                transform: 'rotate(100deg)',
                marginRight: '-20px',
                opacity: 0.8
              }}
            />
          </div>
          {sectionIcons.map((card, index) => (
            <div
              key={card.id}
              onClick={() => navigate(`/${card.id}`)}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                padding: '1.5rem',
                borderRadius: '20px',
                background: hoveredCard === card.id
                  ? `linear-gradient(135deg, ${card.color}15, ${card.color}05)`
                  : 'rgba(255,255,255,0.9)',
                border: `2px solid ${hoveredCard === card.id ? card.color : '#dce3ec'}`,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === card.id ? 'scale(1.15) translateY(-5px)' : 'scale(1) translateY(0)',
                backdropFilter: 'blur(10px)',
                boxShadow: hoveredCard === card.id
                  ? `0 20px 60px ${card.color}30, 0 0 40px ${card.color}15`
                  : '0 10px 30px rgba(15,23,42,0.08)',
                animation: `slideInUp 0.8s ease-out ${0.8 + index * 0.1}s both`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100px'
              }}
            >
              {/* Animated background gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: hoveredCard === card.id
                    ? `radial-gradient(circle at center, ${card.color}20, transparent 70%)`
                    : 'transparent',
                  transition: 'all 0.3s ease',
                  pointerEvents: 'none'
                }}
              />
              
              <div
                style={{
                  fontSize: '3.5rem',
                  position: 'relative',
                  zIndex: 1,
                  transform: hoveredCard === card.id ? 'rotate(10deg)' : 'rotate(0deg)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: hoveredCard === card.id ? `drop-shadow(0 0 20px ${card.color}40)` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3.5rem',
                  height: '3.5rem'
                }}
              >
                <img 
                  src={card.iconPath} 
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h4
                style={{
                  color: '#0f172a',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  margin: '0.5rem 0 0',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {card.title}
              </h4>

              {/* Shine effect */}
              {hoveredCard === card.id && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `linear-gradient(45deg, transparent, ${card.color}15, transparent)`,
                    animation: 'shine 1.5s ease-in-out',
                    pointerEvents: 'none'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Contact Section - Small Pill Shaped at Bottom */}
        <div
          style={{
            marginTop: '4rem',
            marginBottom: '8rem',
            padding: '1.5rem 2.5rem',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.9)',
            border: '1px solid #dce3ec',
            boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '600px',
            width: '100%',
            animation: 'slideInUp 0.8s ease-out 1.2s both',
            position: 'relative',
            zIndex: 3
          }}
        >
          <h4
            style={{
              margin: 0,
              color: '#0f172a',
              fontWeight: 600,
              fontSize: '1.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            Get in Touch
          </h4>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              width: '100%',
              alignItems: 'center'
            }}
          >
            {/* Email and Phone on same line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img 
                  src="/icons/email.png" 
                  alt="Email"
                  style={{ width: '1rem', height: '1rem', objectFit: 'contain' }}
                />
                <a
                  href="mailto:saiyam983@gmail.com"
                  style={{ color: '#2563eb', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
                >
                  saiyam983@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img 
                  src="/icons/phone.png" 
                  alt="Phone"
                  style={{ width: '1rem', height: '1rem', objectFit: 'contain' }}
                />
                <a
                  href="tel:+918660528056"
                  style={{ color: '#2563eb', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
                >
                  +91 86605 28056
                </a>
              </div>
            </div>
            
            {/* Location on next line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontSize: '0.9rem' }}>
              <img 
                src="/icons/location.png" 
                alt="Location"
                style={{ width: '1rem', height: '1rem', objectFit: 'contain' }}
              />
              <span>Bengaluru, India</span>
            </div>
            
            {/* GitHub and LinkedIn below */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
              <a
                href="https://github.com/saiyam"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2563eb', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
              >
                GitHub
              </a>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <a
                href="https://linkedin.com/in/saiyam"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2563eb', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#64748b',
            fontSize: '0.9rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <span>Scroll to explore</span>
          <div
            style={{
              width: '2px',
              height: '30px',
              background: 'linear-gradient(to bottom, #0ea5e9, rgba(14,165,233,0.3))',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
        </div>
      </main>

      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
            50% { opacity: 1; transform: scaleY(1); }
          }
        `}
      </style>
      </div>
    </>
  );
};

export default Home;

