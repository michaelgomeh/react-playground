import { CodeHighlight } from '@mantine/code-highlight';
import {
	Button,
	Group,
	Stack,
	Title,
	Text,
	Container,
	ScrollArea,
} from '@mantine/core';
import React, { useMemo, useState } from 'react';

const ExpensiveComponentWithoutUseMemo = ({ count }) => {
	console.log('Rendering ExpensiveComponent without useMemo...');
	const computeValue = () => {
		console.log('Computing Without useMemo...');
		return count + 1;
	};

	return <p>Computed Value Bad: {computeValue()}</p>;
};

const ExpensiveComponentWithUseMemo = ({ count }) => {
	console.log('Rendering ExpensiveComponent with useMemo...');
	const computedValue = useMemo(() => {
		console.log('Computing With useMemo...');
		return count + 1;
	}, [count]);
	return <p>Computed Value WithUseMemo: {computedValue}</p>;
};

export const UseMemoExample = () => {
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(false);

	return (
		<Container>
			<ExpensiveComponentWithoutUseMemo count={count} />
			<ExpensiveComponentWithUseMemo count={count} />
			<div>IsToggled: {String(toggle)}</div>
			<Group m={16}>
				<Button onClick={() => setCount(count + 1)}>Increment</Button>
				<Button onClick={() => setToggle(!toggle)}>Toggle</Button>
			</Group>
		</Container>
	);
};

const PerformanceAndOptimizationPage = () => {
	return (
		<ScrollArea>
			<Stack>
				<Title order={1}>PerformancePage</Title>
				<Title order={2}>useMemo</Title>
				<Text>
					Memoizing Computations useMemo is used to optimize expensive
					calculations by memoizing the result until dependencies change.
				</Text>
				<CodeHighlight
					code={`import { useState } from "react";
const ExpensiveComponent = ({ count }) => {
  console.log("Rendering ExpensiveComponent...");
  const computeValue = () => {
    console.log("Computing...");
    return count +1;
  };

  return <p>Computed Value: {computeValue()}</p>;
};

export default function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}`}
					language="tsx"
				/>
				<Text>
					Issue: Clicking "Toggle" re-renders ExpensiveComponent, triggering
					computeValue() again.
				</Text>
				<CodeHighlight
					code={`import { useState, useMemo } from "react";
const ExpensiveComponent = ({ count }) => {
  const computedValue = useMemo(() => { //add this line
    console.log("Computing...");
    return count +1;
  }, [count]); // Only recompute when 'count' changes

  return <p>Computed Value: {computedValue}</p>;
};`}
					language="tsx"
				/>
				<Text>Test both examples here:</Text>
				<UseMemoExample />
				<Text>
					Now, computeValue() runs only when count changes, reducing unnecessary
					calculations.
				</Text>
			</Stack>
		</ScrollArea>
	);
};

export default PerformanceAndOptimizationPage;
