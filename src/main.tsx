import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './firebase';
import { AuthProvider } from './context/AuthContext'; // 👈 import

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* 👈 wrap App */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
