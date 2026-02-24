import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Providers } from '@/providers';
import { GlobalNavbar } from '@/layout';
import './globals.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          <GlobalNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
