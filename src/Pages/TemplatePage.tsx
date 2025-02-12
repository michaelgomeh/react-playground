import { CodeHighlight } from '@mantine/code-highlight';
import { ScrollArea, Stack, Title, Text } from '@mantine/core';
import React from 'react';

const TemplatePage = () => {
	return (
		<ScrollArea>
			<Stack>
				<Title order={1}>Template Page</Title>
				<Title order={2}>Topic 1</Title>
				<Text>Explanation of the problem </Text>
				<CodeHighlight code={`This is some code`} language="tsx" />
			</Stack>
		</ScrollArea>
	);
};

export default TemplatePage;
