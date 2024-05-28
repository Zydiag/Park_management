import Navbar from '@/components/Navbar/Navbar';

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
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
