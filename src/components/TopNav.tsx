import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Achievements', path: '/achievements' }
];

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 120,
        padding: '0.6rem 1.5rem',
        borderRadius: 999,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(14px)',
        border: '1px solid #dce3ec',
        boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: '#0f172a'
        }}
      >
        Saiyam
      </button>
      <div
        style={{
          width: '1px',
          height: '1.5rem',
          background: '#e2e8f0'
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.9rem'
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                borderRadius: 999,
                border: 'none',
                padding: '0.3rem 0.8rem',
                cursor: 'pointer',
                background: isActive ? 'rgba(14,165,233,0.12)' : 'transparent',
                color: isActive ? '#0f172a' : '#64748b',
                fontWeight: isActive ? 600 : 500,
                transition: 'background 0.15s ease, color 0.15s ease, transform 0.15s ease'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(148,163,184,0.12)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isActive ? 'rgba(14,165,233,0.12)' : 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TopNav;


