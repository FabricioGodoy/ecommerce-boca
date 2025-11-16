// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Footer } from '@/components/footer/Footer';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '@/components/ui/theme/ThemeProvider';
import Shell from '@/components/navBar/Shell';

export const metadata = {
  title: 'VagoXeneize',
  description: 'Indumentaria bostera',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="es" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript/>
      </head>
      <body>
        <MantineProvider theme={theme} forceColorScheme='light' defaultColorScheme='light'>
          <Shell>
            {children}
          </Shell>
          <Footer/>
        </MantineProvider>
      </body>
    </html>
  );
}