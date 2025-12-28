'use client';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default function RadixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme appearance="light" accentColor="indigo" grayColor="slate" radius="medium">
      <div style={{ padding: 20, backgroundColor: 'var(--gray-2)', minHeight: '100vh' }}>
        {children}
      </div>
    </Theme>
  );
}
