import { CodeHighlight } from '@mantine/code-highlight';
import { ScrollArea, Stack, Title, Text, Input } from '@mantine/core';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';

const UseCallbackPage = () => {
	const [query, setQuery] = useState('react');
	const [users, setUsers] = useState([]);

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

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]); // ✅ `fetchUsers` changes when `query` changes

	return (
		<ScrollArea>
			<Stack>
				<Title order={1}>UseCallback</Title>
				<Text>
					useCallback is used to memoize functions so they don't get re-created
					on every render.
				</Text>
				<CodeHighlight
					code={`
          	const fetchUsers = useCallback(async () => {
		if (!query) return;

		console.log('Fetching users for: ${query}');

		try {
			const response = await fetch(
				'https://api.github.com/search/users?q=${query}'
			);
			const data = await response.json();
			setUsers(data.items || []);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	}, [query]); // ✅ Function updates when 'query' changes
`}
					language="tsx"
				/>
				<Input value={query} onChange={(e) => setQuery(e.target.value)} />
				<ScrollArea h={256}>
					{users.map((u: { login: string }) => (
						<Text key={u.login}>{u.login}</Text>
					))}
				</ScrollArea>
			</Stack>
		</ScrollArea>
	);
};

export default UseCallbackPage;
