import {Roboto} from 'next/font/google';

export const font = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font'
});