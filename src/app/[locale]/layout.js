import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '../../components/ThemeProvider';
import { ThemeToggle } from '../../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohamed Mahmoud - Portfolio',
  description: 'MERN Stack Developer Portfolio',
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  
  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
