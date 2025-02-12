import { CodeHighlight } from '@mantine/code-highlight';
import { ScrollArea, Stack, Title, Text } from '@mantine/core';
import React from 'react';

const WebSocket = () => {
	return (
		<ScrollArea>
			<Stack>
				<Title order={1}>WebSocket Page</Title>
				<Text> </Text>
				<CodeHighlight code={`This is some code`} language="tsx" />
			</Stack>
		</ScrollArea>
	);
};

export default WebSocket;
