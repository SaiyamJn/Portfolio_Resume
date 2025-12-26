import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';
import TopNav from '../components/TopNav';
import wallyLogo from '../../Assets/Wally/Wally.png';
import dividoLogo from '../../Assets/Wally/divido.png';

type Project = {
  name: string;
  date: string;
  stack: string;
  bullets: string[];
  link?: string;
};

const Projects = () => {
  const navigate = useNavigate();
  const [isWallyModalOpen, setIsWallyModalOpen] = useState(false);

  const projects: Project[] = [
    {
      name: 'Wally — Personal Finance Management App',
      date: 'Aug 2025 — Present',
      stack: 'React Native, TypeScript, Expo',
      bullets: [
        'Offline-first finance tracker with multi-account support and real-time balance calculations.',
        'Data persistence via AsyncStorage with secure export/import and JSON validation.',
        'Dark UI with custom assets, micro-animations, and analytics charts for spending insights.'
      ]
    },
    {
      name: 'Financial Research AI Agent',
      date: '2025',
      stack: 'Python, FastAPI, LangGraph, LangChain, MongoDB, Redis, React, Plotly, yfinance, Gemini, Groq',
      link: 'https://github.com/SaiyamJn/Financial-Research-Agent.git',
      bullets: [
        'Built an AI-powered financial research assistant for Indian stock market analysis with real-time data ingestion and interactive visualizations.',
        'Implemented technical analysis features including 20-day Moving Average and 14-day RSI with Plotly-based charts and two-stock comparison.',
        'Designed multi-agent AI workflows (Research, Sentiment, Portfolio, Unified Analysis) using LangGraph and LangChain.',
        'Integrated LLMs (Google Gemini and Groq Llama3) to generate intelligent insights, sentiment analysis, and portfolio-level summaries.',
        'Developed a scalable FastAPI backend with MongoDB for persistence and Redis for caching, paired with a React + Vite frontend.'
      ]
    },
    {
      name: 'Krishi AI — Smart Agriculture App',
      date: 'Sept 2025',
      stack: 'React Native, TypeScript, REST APIs, SQLite, TensorFlow Lite',
      link: 'https://github.com/SaiyamJn/CROP-REC.git',
      bullets: [
        'Cross-platform AI assistant providing soil, crop, and irrigation recommendations.',
        'Integrated on-device TensorFlow Lite predictions with offline storage through SQLite.',
        'Optimized render paths for a smoother UI, trimming runtime by roughly 25%.'
      ]
    },
    {
      name: 'Market Basket Analysis — Purchase Prediction',
      date: '2024',
      stack: 'Python, Pandas, Scikit-Learn, Apriori, FP-Growth',
      link: 'https://github.com/SaiyamJn/Association-Rule-Mining.git',
      bullets: [
        'Association-rule mining to predict customer purchase patterns using Apriori and FP-Growth.',
        'Generated product recommendations from frequent itemsets with lift and confidence metrics.',
        'Visualized actionable rules to support retail decision-making.'
      ]
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
        <ResumeSection title="Projects" description="Selected builds that show range and depth.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((project) => (
              <div
                key={project.name}
                style={{
                  border: '1px solid #dce3ec',
                  borderRadius: 14,
                  padding: '1.1rem',
                  background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: project.name.includes('Wally') ? 'pointer' : 'default'
                }}
                onClick={() => {
                  if (project.name.includes('Wally')) {
                    setIsWallyModalOpen(true);
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(2,132,199,0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h4 style={{ margin: 0, color: '#0f172a', fontWeight: 500, letterSpacing: '-0.01em' }}>
                    {project.name}
                  </h4>
                  <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{project.date}</span>
                </div>
                <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{project.stack}</p>
                <ul style={listStyle}>
                  {project.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      color: '#2563eb',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginTop: '0.5rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1d4ed8';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#2563eb';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    Explore More →
                  </a>
                ) : (
                  <span
                    style={{
                      color: '#64748b',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      display: 'inline-block',
                      marginTop: '0.5rem'
                    }}
                  >
                    Explore More →
                  </span>
                )}
              </div>
            ))}
          </div>
        </ResumeSection>
      </main>
    </div>

    {/* Wally Project Modal */}
    {isWallyModalOpen && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem',
          overflow: 'auto'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsWallyModalOpen(false);
          }
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '1200px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <style>
            {`
              @keyframes blobMoveCell1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(20px, -15px) scale(1.1); }
                50% { transform: translate(-15px, 20px) scale(0.9); }
                75% { transform: translate(15px, 15px) scale(1.05); }
              }
              @keyframes blobMoveCell2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-20px, 15px) scale(1.15); }
                50% { transform: translate(15px, -20px) scale(0.85); }
                75% { transform: translate(-15px, 15px) scale(1.1); }
              }
              @keyframes blobMoveCell3 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                20% { transform: translate(15px, 20px) scale(0.9); }
                40% { transform: translate(-20px, -15px) scale(1.2); }
                60% { transform: translate(20px, -10px) scale(0.95); }
                80% { transform: translate(-15px, 20px) scale(1.1); }
              }
              @keyframes blobMoveCell4 {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                25% { transform: translate(-45%, -55%) scale(1.2); }
                50% { transform: translate(-55%, -45%) scale(0.8); }
                75% { transform: translate(-50%, -50%) scale(1.1); }
              }
              @keyframes blobMoveCell5 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                30% { transform: translate(20px, 15px) scale(1.1); }
                60% { transform: translate(-15px, -20px) scale(0.9); }
              }
              @keyframes blobMoveCell6 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                20% { transform: translate(-25px, -20px) scale(1.3); }
                40% { transform: translate(20px, 25px) scale(0.75); }
                60% { transform: translate(-20px, 20px) scale(1.2); }
                80% { transform: translate(15px, -15px) scale(0.9); }
              }
              @keyframes blobMoveCell7 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(15px, -20px) scale(1.1); }
                50% { transform: translate(-20px, 15px) scale(0.9); }
                75% { transform: translate(20px, 20px) scale(1.05); }
              }
              @keyframes blobMoveCell8 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                30% { transform: translate(-20px, 15px) scale(1.15); }
                60% { transform: translate(15px, -20px) scale(0.85); }
              }
              @keyframes blobMoveCell9 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(30px, -20px) scale(1.25); }
                50% { transform: translate(-25px, 30px) scale(0.75); }
                75% { transform: translate(20px, 15px) scale(1.1); }
              }
              @keyframes blobMoveCell10 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                20% { transform: translate(-30px, -30px) scale(1.2); }
                40% { transform: translate(25px, 25px) scale(0.8); }
                60% { transform: translate(-20px, 30px) scale(1.15); }
                80% { transform: translate(30px, -25px) scale(0.9); }
              }
              @keyframes blobMoveCell11 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                20% { transform: translate(20px, 30px) scale(1.2); }
                40% { transform: translate(-30px, -20px) scale(0.8); }
                60% { transform: translate(25px, -25px) scale(1.1); }
                80% { transform: translate(-20px, 20px) scale(0.95); }
              }
              @keyframes blobMoveCell12 {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                25% { transform: translate(-35%, -65%) scale(1.3); }
                50% { transform: translate(-65%, -35%) scale(0.7); }
                75% { transform: translate(-45%, -55%) scale(1.15); }
              }
              @keyframes blobMoveCell13 {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                30% { transform: translate(-40%, -60%) scale(1.25); }
                60% { transform: translate(-60%, -40%) scale(0.75); }
                90% { transform: translate(-50%, -50%) scale(1.1); }
              }
              @keyframes blobMoveCell14 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(35px, -25px) scale(1.3); }
                66% { transform: translate(-30px, 35px) scale(0.7); }
              }
              @keyframes blobMoveCell15 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-35px, -35px) scale(1.25); }
                50% { transform: translate(30px, 30px) scale(0.75); }
                75% { transform: translate(-25px, 35px) scale(1.15); }
              }
              @keyframes blobMoveCell16 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                30% { transform: translate(25px, 35px) scale(1.2); }
                60% { transform: translate(-35px, -25px) scale(0.8); }
                90% { transform: translate(30px, -30px) scale(1.1); }
              }
              @keyframes blobMoveCell17 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                40% { transform: translate(30px, -35px) scale(1.3); }
                80% { transform: translate(-30px, 30px) scale(0.7); }
              }
              @keyframes blobMoveCell18 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-30px, 25px) scale(1.2); }
                50% { transform: translate(35px, -30px) scale(0.8); }
                75% { transform: translate(-25px, -35px) scale(1.15); }
              }
            `}
          </style>
          {/* Close Button */}
          <button
            onClick={() => setIsWallyModalOpen(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#64748b',
              padding: '0.5rem',
              borderRadius: '8px',
              transition: 'background-color 0.2s',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ×
          </button>

          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0, color: '#0f172a', fontSize: '1.75rem', fontWeight: 600 }}>
              Wally — Offline-first finance, on your device
            </h2>
            <a
              href="https://github.com/SaiyamJn/WallyMobile.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1e293b';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0f172a';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23 1.957-.544 4.064-.544 6.021 0 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
          <p style={{ marginBottom: '2rem', color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
            Your data stays local. No cloud, no ads, no tracking. Track money, manage accounts, and split group expenses — fully private, even offline.
          </p>

          {/* Bento Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
              gap: '12px',
              backgroundColor: '#f8fafc',
              padding: '12px',
              borderRadius: '12px',
              minHeight: '500px'
            }}
          >
            {/* Salmon - Accounts */}
            <div
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 1',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-30%',
                right: '-20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(14,165,233,0.4), rgba(14,165,233,0.1))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell1 20s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-25%',
                left: '-15%',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.3), rgba(139,92,246,0.05))',
                borderRadius: '50%',
                filter: 'blur(35px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell14 18s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '10%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.3), rgba(168,85,247,0.05))',
                borderRadius: '50%',
                filter: 'blur(30px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell15 22s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Accounts</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                Manage multiple accounts such as savings, trips, and investments with real-time balances, visual icons, and account-specific filtering.
              </p>
            </div>

            {/* Broccoli - Divido */}
            <div
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 1',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-30%',
                right: '-20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(16,185,129,0.4), rgba(16,185,129,0.1))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell2 22s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-25%',
                left: '-15%',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(14,165,233,0.3), rgba(14,165,233,0.05))',
                borderRadius: '50%',
                filter: 'blur(35px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell16 19s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.3), rgba(245,158,11,0.05))',
                borderRadius: '50%',
                filter: 'blur(30px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell17 24s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Divido</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                Split group expenses equally, by custom amounts, or by percentage — with automatic debt calculation and simplified settlements.
              </p>
            </div>

            {/* Tamago - Tech Stack */}
            <div
              style={{
                gridColumn: 'span 1',
                gridRow: 'span 4',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem 1rem 0.5rem 1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.4), rgba(245,158,11,0.1))',
                borderRadius: '50%',
                filter: 'blur(50px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell3 24s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-15%',
                width: '140px',
                height: '140px',
                background: 'radial-gradient(circle, rgba(239,68,68,0.3), rgba(239,68,68,0.05))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell18 21s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '60%',
                left: '10%',
                width: '110px',
                height: '110px',
                background: 'radial-gradient(circle, rgba(236,72,153,0.3), rgba(236,72,153,0.05))',
                borderRadius: '50%',
                filter: 'blur(35px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell14 26s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.75rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Tech Stack</h3>
              <div style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
                <p style={{ margin: '0 0 0.4rem 0', fontWeight: 600 }}>Core:</p>
                <p style={{ margin: '0 0 0.75rem 0' }}>React Native · Expo · TypeScript · AsyncStorage</p>
                <p style={{ margin: '0 0 0.4rem 0', fontWeight: 600 }}>Architecture:</p>
                <p style={{ margin: '0 0 0.75rem 0' }}>Offline-first architecture with reliable local persistence.</p>
                <p style={{ margin: '0 0 0.4rem 0', fontWeight: 600 }}>Platforms:</p>
                <p style={{ margin: 0 }}>Android · iOS · Web — one consistent experience across devices.</p>
              </div>
            </div>

            {/* Pork - Logos */}
            <div
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 2',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem 1rem 0.5rem 1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.4), rgba(139,92,246,0.1))',
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                transform: 'translate(-50%, -50%)',
                animation: 'blobMoveCell4 26s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.3), rgba(168,85,247,0.05))',
                borderRadius: '50%',
                filter: 'blur(45px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell12 23s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '130px',
                height: '130px',
                background: 'radial-gradient(circle, rgba(236,72,153,0.3), rgba(236,72,153,0.05))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell13 27s ease-in-out infinite'
              }} />
              <img
                src={wallyLogo}
                alt="Wally Logo"
                style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', position: 'relative', zIndex: 1 ,borderRadius: '20px'}}
              />
              <img
                src={dividoLogo}
                alt="Divido Logo"
                style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', position: 'relative', zIndex: 1 ,borderRadius: '20px'}}
              />
            </div>

            {/* Edamame - Design & UX */}
            <div
              style={{
                gridColumn: 'span 1',
                gridRow: 'span 2',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem 1rem 0.5rem 1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: '-30%',
                right: '-20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(236,72,153,0.4), rgba(236,72,153,0.1))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell5 21s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-15%',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.3), rgba(139,92,246,0.05))',
                borderRadius: '50%',
                filter: 'blur(35px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell15 20s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '40%',
                right: '10%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(14,165,233,0.3), rgba(14,165,233,0.05))',
                borderRadius: '50%',
                filter: 'blur(30px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell16 25s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Design & UX</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                Modern, dark-first design inspired by Apple interfaces. Clean layouts, soft depth, smooth micro-interactions, and carefully tuned spacing for a calm, focused experience.
              </p>
            </div>

            {/* Tomato - Transactions */}
            <div
              style={{
                gridColumn: 'span 3',
                gridRow: 'span 2',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(239,68,68,0.4), rgba(239,68,68,0.1))',
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell6 28s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-15%',
                right: '-15%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.3), rgba(245,158,11,0.05))',
                borderRadius: '50%',
                filter: 'blur(50px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell17 25s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '30%',
                right: '20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.3), rgba(168,85,247,0.05))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell18 22s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Transactions</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                Track income and expenses with categories, notes, and fast editing designed for daily use.
              </p>
            </div>

            {/* Tofu - Reports */}
            <div
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 1',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-30%',
                left: '-20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.4), rgba(168,85,247,0.1))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell7 23s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-25%',
                right: '-15%',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(14,165,233,0.3), rgba(14,165,233,0.05))',
                borderRadius: '50%',
                filter: 'blur(35px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell14 19s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '30%',
                right: '15%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(236,72,153,0.3), rgba(236,72,153,0.05))',
                borderRadius: '50%',
                filter: 'blur(30px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell15 26s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Reports</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                Clear financial insights with income vs expense views, category breakdowns, and time-based summaries.
              </p>
            </div>

            {/* Tempura - Roadmap */}
            <div
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 1',
                backgroundColor: '#ffffff',
                border: '1px solid #dce3ec',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: '-30%',
                right: '-20%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.4), rgba(245,158,11,0.1))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.6,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell8 25s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '-25%',
                left: '-15%',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(16,185,129,0.3), rgba(16,185,129,0.05))',
                borderRadius: '50%',
                filter: 'blur(35px)',
                opacity: 0.5,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell16 21s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.3), rgba(139,92,246,0.05))',
                borderRadius: '50%',
                filter: 'blur(30px)',
                opacity: 0.4,
                mixBlendMode: 'multiply',
                animation: 'blobMoveCell17 23s ease-in-out infinite'
              }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Roadmap</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                Optional cloud sync, budgeting tools, widgets, and deeper analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Projects;

