import {
	ScrollArea,
	Stack,
	Title,
	Text,
	Input,
	Button,
	List,
	ListItem,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';

const SOCKET_URL = 'wss://echo.websocket.org'; // Public WebSocket echo server

const WebSocketPage = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [input, setInput] = useState('');
	const [socket, setSocket] = useState<WebSocket | null>(null);

	useEffect(() => {
		const ws = new WebSocket(SOCKET_URL);
		ws.onopen = () => {
			console.log('Connection Opened!');
			setSocket(ws);
		};
		ws.onclose = () => console.log('Connection Closed');
		ws.onmessage = (e) => setMessages((prev) => [...prev, e.data]);
		ws.onerror = (error) => console.error('WebSocket Error', error);
		ws.onclose = () => console.log('WebSocket Disconnected');
		return () => ws.close();
	}, []);

	const sendMessage = () => {
		if (socket && input) {
			socket.send(input);
			setMessages((prev) => [...prev, `You: ${input}`]);
			setInput('');
		}
	};

	return (
		<ScrollArea>
			<Stack>
				<Title order={1}>WebSocket Page</Title>
				<Text>
					WebSockets enable real-time, two-way communication between the client
					and server, Unlike REST APIs, which require polling.
				</Text>
				<Input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Enter Message"
				/>
				<Button onClick={sendMessage}>Send Message</Button>
				<List>
					{messages.map((msg) => (
						<ListItem>{msg}</ListItem>
					))}
				</List>
			</Stack>
		</ScrollArea>
	);
};

export default WebSocketPage;
