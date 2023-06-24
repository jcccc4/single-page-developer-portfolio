import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  weight: [ "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Adam Keyes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body suppressHydrationWarning={true}  className={`${space_grotesk.variable}`}>{children}</body>
    </html>
  );
}
