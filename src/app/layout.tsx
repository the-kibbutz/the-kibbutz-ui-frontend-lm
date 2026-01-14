import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: "The Kibbutz Showcase",
  description: "UI Showcase for The Kibbutz Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="light" accentColor="indigo" grayColor="slate" radius="medium">
          <div style={{ backgroundColor: 'var(--gray-2)', minHeight: '100vh' }}>
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
