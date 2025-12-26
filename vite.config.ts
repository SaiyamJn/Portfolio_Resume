import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// For GitHub Pages: Change '/Portfolio_Resume/' to match your repository name
// If your repo is 'my-portfolio', change it to '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio_Resume/' : '/',
  server: {
    host: true,
    port: 5173
  }
});

