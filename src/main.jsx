import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </StrictMode>
);
