import '@/app/global.css';
import { inter } from '@/app/lib/fonts';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Maxi Dashboard',
    default: 'Maxi Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
