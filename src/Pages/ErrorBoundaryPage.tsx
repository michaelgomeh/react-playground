import { CodeHighlight } from '@mantine/code-highlight';
import { ScrollArea, Stack, Title, Text } from '@mantine/core';
import React, { Component, ReactNode } from 'react';

function BuggyComponent(isError) {
	console.log('rerendered');

	// Intentionally throw an error
	if (isError) throw new Error('An error occurred!');
	return <div>Normal Component</div>;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<
	{ children?: ReactNode },
	ErrorBoundaryState
> {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	// Called when an error occurs in a child component
	static getDerivedStateFromError(error) {
		// Update state to display the fallback UI
		return { hasError: true, error };
	}

	// Called after an error is caught, allows for logging error details
	componentDidCatch(error, info) {
		console.error('An error occurred:', error);
		console.error('Error details:', info);
	}

	render() {
		if (this.state.hasError) {
			// Display a fallback UI when an error occurs
			return <Text>Something went wrong. Please try again later.</Text>;
		}

		// Render child components normally if no error
		return this.props.children;
	}
}

const ErrorBoundaryPage = () => {
	return (
		<ScrollArea>
			<Stack>
				<Title order={1}>ErrorBoundary</Title>
				<Text>
					React components can sometimes crash due to unexpected errors. Error
					Boundary is a special class that catches errors in its child
					components.
				</Text>
				<CodeHighlight code={`This is some code`} language="tsx" />
				<ErrorBoundary>
					<BuggyComponent />
				</ErrorBoundary>
			</Stack>
		</ScrollArea>
	);
};

export default ErrorBoundaryPage;
