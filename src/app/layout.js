import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({subsets:['latin'],weight:['400','600'],display:'swap'})

export const metadata = {
  title: "practice1",
  description: "Practice of pallel routing in travel guidence web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
