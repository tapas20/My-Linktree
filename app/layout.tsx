import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tapas LinkTree",
  description: "Tapas Jyoti — Software Engineer @Aptisure. Portfolio, GitHub, LeetCode, LinkedIn and more.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
