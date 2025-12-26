import { ReactNode } from 'react';

type ResumeSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const ResumeSection = ({ title, description, children }: ResumeSectionProps) => (
  <section
    style={{
      background: 'linear-gradient(180deg,#ffffff 0%,#f8fbff 100%)',
      border: '1px solid #dce3ec',
      borderRadius: 18,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 24px 44px rgba(15,23,42,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(800px at 10% 0%, rgba(14,165,233,0.06), transparent 45%)',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
    <header
      style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        paddingBottom: '0.5rem'
      }}
    >
      <h3
        style={{
          color: '#0f172a',
          fontWeight: 400,
          fontSize: '1.6rem',
          letterSpacing: '-0.02em',
          margin: 0
        }}
      >
        {title}
      </h3>
      {description ? (
        <p
          style={{
            margin: '0.4rem auto 0',
            color: '#475569',
            fontSize: '0.96rem',
            lineHeight: 1.6,
            maxWidth: 720
          }}
        >
          {description}
        </p>
      ) : null}
    </header>
    <div style={{ position: 'relative', zIndex: 1, marginTop: '0.75rem' }}>{children}</div>
  </section>
);

export default ResumeSection;

