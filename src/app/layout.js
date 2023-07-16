import './globals.css'
import { Inter } from 'next/font/google'
import MuiNav from '@/components/MuiNav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '30 Line Sport Fishing',
  description: 'Come catch fish',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiNav></MuiNav>
        {children}
      </body>
    </html>
  );
}
