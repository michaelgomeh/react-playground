import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/normalize.css';
import './style/index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import UseMemoPage from './Pages/UseMemoPage';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout';
import '@mantine/code-highlight/styles.css';
import UseCallbackPage from './Pages/UseCallbackPage';
import ErrorBoundaryPage from './Pages/ErrorBoundaryPage';
import LazyLoadingPage from './Pages/LazyLoadingPage';
import WebSocketPage from './Pages/WebsocketPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/usememo" element={<UseMemoPage />} />
						<Route path="/usecallback" element={<UseCallbackPage />} />
						<Route path="/errorboundary" element={<ErrorBoundaryPage />} />
						<Route path="/lazy" element={<LazyLoadingPage />} />
						<Route path="/ws" element={<WebSocketPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>
);
