import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <script src="/js/jquery-3.7.0.js"/>
        <script src="/js/loader.js"/>
      </body>
    </html>
  )
}
