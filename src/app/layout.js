import { onest } from './fonts';
import './styles/globals.css';

export const metadata = {
  title: 'GET_SHOP_TV',
  description: 'One pager with Next.js',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        {children}
      </body>
    </html>
  );
}
