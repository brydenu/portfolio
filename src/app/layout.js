import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bryden Uyehara',
  description: 'Portfolio site for Bryden Uyehara',
  icons: {
    icon: "/favicon.ico",
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
