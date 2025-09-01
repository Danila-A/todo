import './app/Styles/Styles.scss';
import './shared/fonts/Styles/Fonts.scss';
import { createRoot } from 'react-dom/client';
import { App } from './app';

createRoot(document.getElementById('root')!).render(
  <App />
);
