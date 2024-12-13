import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Toaster } from 'sonner'

const mulish = Mulish({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Health Fortune',
  description:
    'Gerencie suas finanças com eficiência: visualize gráficos, registre transações e acompanhe tudo em uma tabela detalhada | Desenvolvido por ReggiDev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <div className="flex h-full flex-col lg:overflow-hidden">
            {children}
          </div>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  )
}
