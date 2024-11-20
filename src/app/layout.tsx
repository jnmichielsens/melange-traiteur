import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melange Traiteur - Exceptional Catering Services',
  description: 'Exceptional catering for extraordinary moments. Professional catering services in Brussels.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 bg-stone-50`}>
        {children}
      </body>
    </html>
  );
}