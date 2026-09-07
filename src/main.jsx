import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// global.css MUST be imported before App so it lands first in the bundled
// stylesheet. Astro's scoped styles carried an extra attribute selector and
// always outranked the globals; as plain CSS the two tie on specificity, so
// source order is what lets a component override a global rule.
import './styles/global.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
