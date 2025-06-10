import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Open_Sans } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'KAYUS School Management System | Admotron Solutions',
  description: 'Comprehensive school automation software for nursery, primary, and secondary schools in Nigeria. Developed by Admotron Solutions.',
  keywords: 'school management system, school automation, Nigeria schools, Admotron Solutions, KAYUS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${openSans.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
