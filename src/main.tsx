import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/normalize.css';
import './style/index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import UseMemoExample from './Pages/UseMemoPage';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout';
import '@mantine/code-highlight/styles.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/usememo" element={<UseMemoExample />} />
						<Route path="/usecallback" element={<UseMemoExample />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>
);
