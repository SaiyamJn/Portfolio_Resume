import React from 'react';

const AnimatedBlobBackground: React.FC = () => {
  return (
    <>
      {/* Animated gradient blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div className="gradient-blob blob-1" />
        <div className="gradient-blob blob-2" />
        <div className="gradient-blob blob-3" />
        <div className="gradient-blob blob-4" />
        <div className="gradient-blob blob-5" />
        <div className="gradient-blob blob-6" />
        <div className="gradient-blob blob-7" />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes floatDiagonal {
            0%, 100% { transform: translateY(0px) rotate(-15deg); }
            50% { transform: translateY(-10px) rotate(-15deg); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .gradient-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            mix-blend-mode: multiply;
          }
          @keyframes blobMove1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(120px, -80px) scale(1.2); }
            40% { transform: translate(-90px, 100px) scale(0.8); }
            60% { transform: translate(80px, 60px) scale(1.1); }
            80% { transform: translate(-70px, -90px) scale(0.9); }
          }
          @keyframes blobMove2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-150px, 100px) scale(1.3); }
            50% { transform: translate(110px, -120px) scale(0.7); }
            75% { transform: translate(-80px, 80px) scale(1.15); }
          }
          @keyframes blobMove3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            16.66% { transform: translate(100px, 90px) scale(0.85); }
            33.33% { transform: translate(-130px, -100px) scale(1.25); }
            50% { transform: translate(90px, -70px) scale(0.9); }
            66.66% { transform: translate(-110px, 110px) scale(1.1); }
            83.33% { transform: translate(70px, 50px) scale(0.95); }
          }
          @keyframes blobMove4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(80px, -140px) scale(1.4); }
            40% { transform: translate(-100px, 90px) scale(0.75); }
            60% { transform: translate(130px, 70px) scale(1.2); }
            80% { transform: translate(-90px, -110px) scale(0.85); }
          }
          @keyframes blobMove5 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-140px, -90px) scale(0.8); }
            50% { transform: translate(120px, 130px) scale(1.35); }
            75% { transform: translate(-100px, 60px) scale(0.9); }
          }
          @keyframes blobMove6 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(100px, 120px) scale(1.3); }
            40% { transform: translate(-80px, 90px) scale(0.75); }
            60% { transform: translate(110px, -100px) scale(1.2); }
            80% { transform: translate(-90px, 70px) scale(0.85); }
          }
          @keyframes blobMove7 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-120px, 110px) scale(1.25); }
            50% { transform: translate(90px, -130px) scale(0.8); }
            75% { transform: translate(-110px, -80px) scale(1.15); }
          }
          .blob-1 {
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(14,165,233,0.4), rgba(14,165,233,0.1));
            top: 10%;
            left: 10%;
            animation: blobMove1 25s ease-in-out infinite;
          }
          .blob-2 {
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(139,92,246,0.4), rgba(139,92,246,0.1));
            top: 60%;
            right: 15%;
            animation: blobMove2 30s ease-in-out infinite;
          }
          .blob-3 {
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, rgba(16,185,129,0.4), rgba(16,185,129,0.1));
            bottom: 20%;
            left: 20%;
            animation: blobMove3 28s ease-in-out infinite;
          }
          .blob-4 {
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(245,158,11,0.4), rgba(245,158,11,0.1));
            top: 30%;
            right: 30%;
            animation: blobMove4 22s ease-in-out infinite;
          }
          .blob-5 {
            width: 420px;
            height: 420px;
            background: radial-gradient(circle, rgba(239,68,68,0.4), rgba(239,68,68,0.1));
            bottom: 10%;
            right: 10%;
            animation: blobMove5 26s ease-in-out infinite;
          }
          .blob-6 {
            width: 380px;
            height: 380px;
            background: radial-gradient(circle, rgba(168,85,247,0.4), rgba(168,85,247,0.1));
            top: 0%;
            left: 0%;
            animation: blobMove6 27s ease-in-out infinite;
          }
          .blob-7 {
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(236,72,153,0.4), rgba(236,72,153,0.1));
            bottom: 0%;
            right: 0%;
            animation: blobMove7 29s ease-in-out infinite;
          }
          .glow-text {
            background: linear-gradient(135deg, #0ea5e9, #8b5cf6, #10b981, #0ea5e9);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease infinite;
          }
        `}
      </style>
    </>
  );
};

export default AnimatedBlobBackground;


