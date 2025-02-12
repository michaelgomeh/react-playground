import { CodeHighlight } from '@mantine/code-highlight';
import { Stack, Title } from '@mantine/core';
import React from 'react';

const PerformanceAndOptimizationPage = () => {
	const codeBadMemo = `import { useState } from "react";
const ExpensiveComponent = ({ count }) => {
  console.log("Rendering ExpensiveComponent...");
  const computeValue = () => {
    console.log("Computing...");
    return count * 1000;
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
}`;

	const codeGoodMemo = `import { useState, useMemo } from "react";
const ExpensiveComponent = ({ count }) => {
  console.log("Rendering ExpensiveComponent...");
  const computedValue = useMemo(() => {
    console.log("Computing...");
    return count * 1000;
  }, [count]); // Only recompute when 'count' changes

  return <p>Computed Value: {computedValue}</p>;
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
}`;

	return (
		<Stack>
			<Title order={1}>PerformancePage</Title>
			<Title order={2}>useMemo</Title>
			Memoizing Computations useMemo is used to optimize expensive calculations
			by memoizing the result until dependencies change.
			<CodeHighlight code={codeBadMemo} language="tsx" />
			Issue: Clicking "Toggle" re-renders ExpensiveComponent, triggering
			computeValue() again.
			<CodeHighlight code={codeGoodMemo} language="tsx" />
		</Stack>
	);
};

export default PerformanceAndOptimizationPage;
