import { Input, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';

const UndoStackPage = () => {
	const [value, setValue] = useState('');
	return (
		<Stack>
			<Text>value: {value}</Text>
			<Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
		</Stack>
	);
};

export default UndoStackPage;
