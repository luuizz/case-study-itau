import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lp-itau.netlify.app/'),
  title: 'Itaú | Personalizado para você!',
  description: 'Bem-vindo ao Itaú, onde segurança, confiança e familiaridade se encontram. Descubra nossos serviços personalizados para você e sua empresa. Realize operações bancárias com a tranquilidade que só o Itaú oferece.',
  openGraph: {
    images: '/og-image.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
