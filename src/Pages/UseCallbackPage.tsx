import { CodeHighlight } from '@mantine/code-highlight';
import { ScrollArea, Stack, Title, Text } from '@mantine/core';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';

const UseCallbackPage = () => {
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

export default UseCallbackPage;

export default function App() {
	const [query, setQuery] = useState('react');
	const [users, setUsers] = useState([]);

	// 🔹 Memoizing fetchUsers and re-creating it only when `query` changes
	const fetchUsers = useCallback(async () => {
		if (!query) return;

		console.log(`Fetching users for: ${query}`);

		try {
			const response = await fetch(
				`https://api.github.com/search/users?q=${query}`
			);
			const data = await response.json();
			setUsers(data.items || []);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	}, [query]); // ✅ Function updates when `query` changes

	// 🔹 Fetch data when `fetchUsers` changes
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]); // ✅ `fetchUsers` changes when `query` changes

	return (
		<div>
			<h1>GitHub User Search</h1>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search for a user..."
			/>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.login}</li>
				))}
			</ul>
		</div>
	);
}
