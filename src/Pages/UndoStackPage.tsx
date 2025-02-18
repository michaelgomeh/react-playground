import { Button, Group, Input, ScrollArea, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';

const UndoStackPage = () => {
	const [value, setValue] = useState('');
	const [lastChange, setLastChange] = useState('');
	const [undoHistory, setUndoHistory] = useState<string[]>([]);

	const handleChange = (value) => {
		const _lastChange = lastChange;
		setUndoHistory([...undoHistory, _lastChange]);
		setLastChange(value);
		setValue(value);
	};

	const handleUndo = () => {
		if (undoHistory.length === 0) return;
		const newHistory = undoHistory;
		const lastItem = newHistory.pop();
		setUndoHistory(newHistory);
		setValue(lastItem ?? '');
	};

	return (
		<Group align="start">
			<Stack w="50vw">
				<Text>Value: {value}</Text>
				<Button onClick={handleUndo}>Undo {`<<--`}</Button>
				<Input
					value={value}
					onChange={(e) => handleChange(e.currentTarget.value)}
				/>
			</Stack>
			<ScrollArea h="100%">
				{undoHistory.reverse().map((e, i) => (
					<Text key={i + e}>{e.slice(0, 10)}</Text>
				))}
			</ScrollArea>
		</Group>
	);
};

export default UndoStackPage;
