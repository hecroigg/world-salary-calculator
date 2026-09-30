import type { Metadata } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://netsalarymap.online"),
  title: { default: "Net Salary Map - International Gross to Net Calculator", template: "%s | Net Salary Map" },
  description:
    "Compare gross and net salaries across 25 countries with transparent, country-specific tax estimates.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Net Salary Map",
    title: "Net Salary Map - International Gross to Net Calculator",
    description: "Compare gross and net salaries across 25 countries with transparent, country-specific tax estimates.",
    url: "https://netsalarymap.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
