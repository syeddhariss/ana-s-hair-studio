
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Critical: Could not find root element. The application cannot start.");
}

// Global error handler to catch initialization issues
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Global Application Error:", { message, error });
  return false;
};
