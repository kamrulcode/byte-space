import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import ScrollAnimations from "@/components/motion/ScrollAnimations";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf", // Adjust path to where your file is located
  variable: "--font-satoshi",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ByteSpace | Learn, Create, Grow",
  description: "Explore courses, build practical skills, and grow with the ByteSpace learning community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} ${satoshi.className} `}
    >
      <body>
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
