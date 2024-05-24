import './globals.css';
export const metadata = {
  title: 'Park Management',
  description: 'A Park Management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark">{children}</body>
    </html>
  );
}
