import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { CustomCursor } from "@/components/custom-cursor";
import { NavMenu } from "@/components/nav-menu";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Mouhamadou Sylla",
  description: "Portfolio de Mouhamadou Sylla - Développeur Full Stack & Expert Réseaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={jetbrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <NavMenu />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}