import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18+ API
import AuthForm from './components/AuthForm'; // Correct

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AuthForm />);
}

