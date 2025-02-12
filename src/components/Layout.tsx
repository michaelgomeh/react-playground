import {
	AppShell,
	AppShellMain,
	Burger,
	Group,
	NavLink,
	ScrollArea,
} from '@mantine/core';
import React, { ReactNode } from 'react';
import { IconBrandReact } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router';

const Layout = ({ children }: { children: ReactNode }) => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header p={12}>
				<Group align="center">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<IconBrandReact strokeWidth={1} />
					<Link to={'/'}>React Playground</Link>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<ScrollArea>
					<NavLink label="Performance And Optimization" opened={true}>
						<NavLink href="/usememo" label="UseMemo Hook" />
						<NavLink href="/usecallback" label="useCallback Hook" />
					</NavLink>
					<NavLink href="/errorboundary" label="ErrorBoundary" />
					<NavLink href="/lazy" label="Lazy Loading" />
					<NavLink href="/ws" label="Websocket" />
				</ScrollArea>
			</AppShell.Navbar>
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	);
};

export default Layout;
