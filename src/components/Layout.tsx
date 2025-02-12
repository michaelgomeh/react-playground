import { AppShell, AppShellMain, Group } from '@mantine/core';
import React, { ReactNode } from 'react';
import { IconBrandReact } from '@tabler/icons-react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<AppShell>
			<AppShell.Header p={12}>
				<Group>
					<IconBrandReact strokeWidth={1} />
					React Playground
				</Group>
			</AppShell.Header>
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	);
};

export default Layout;
