import { Button, ScrollArea, Title, Text, Center } from '@mantine/core';
import React, { lazy, Suspense, useState } from 'react';

const fakePromise = (promise) => {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
};

const LazyComponent = lazy(() =>
	fakePromise(import('../components/LazyComponent'))
);

export default function LazyLoadingPage() {
	return (
		<ScrollArea>
			<Title order={1}>Dashboard</Title>
			<Center>
				<Suspense fallback={<div>Loading Lazy in 2 seconds...</div>}>
					<LazyComponent />
				</Suspense>
			</Center>
		</ScrollArea>
	);
}
