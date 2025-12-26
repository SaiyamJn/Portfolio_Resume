import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';

// Get base path from vite config (for GitHub Pages)
const basePath = import.meta.env.BASE_URL;

const App = () => {
  return (
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Redirect old /about links back to home since About is now part of Home */}
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
