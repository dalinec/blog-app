import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog app',
  description: 'Full-Stack blog app with CRUD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-white' lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className='container h-full mt-4 sm:mt-12 '>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
