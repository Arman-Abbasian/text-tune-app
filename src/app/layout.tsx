import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const yekanBakh = localFont({
  src: [
    {
      path: '../assets/fonts/YekanBakh-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/YekanBakh-ExtraBlack.woff2',
      weight: '950',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'اصلاح صوت',
  description: 'نرم افزار اصلاح صوت',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" className={yekanBakh.className}>
      <body className={`antialiased`}>
        <div className="p-4 h-full bg-[radial-gradient(circle,_#fbbf24,_#0f172a)] text-secondary-900">
          {children}
        </div>
      </body>
    </html>
  )
}
