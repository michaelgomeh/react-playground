import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/normalize.css';
import './style/index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import PerformanceAndOptimizationPage from './Pages/Performance';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/performance"
							element={<PerformanceAndOptimizationPage />}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>
);
