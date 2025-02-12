import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/normalize.css';
import './style/index.css';
import App from './App.tsx';
import React from 'react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
