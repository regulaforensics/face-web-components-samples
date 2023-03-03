import '@regulaforensics/vp-frontend-face-components';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root');
const root = createRoot(element as HTMLElement);

root.render(<App />);
