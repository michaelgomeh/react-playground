import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/normalize.css';
import './style/index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import PerformanceAndOptimizationPage from './Pages/Performance';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/performance"
					element={<PerformanceAndOptimizationPage />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
