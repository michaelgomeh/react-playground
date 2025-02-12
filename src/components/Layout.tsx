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

const Layout = ({ children }: { children: ReactNode }) => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header p={12}>
				<Group>
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<IconBrandReact strokeWidth={1} />
					React Playground
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<ScrollArea>
					<NavLink href="/performance" label="Performance And Optimization" />
				</ScrollArea>
			</AppShell.Navbar>
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	);
};

export default Layout;
