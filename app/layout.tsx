import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvier";
import Sidebar from "@/components/Sidebar";
import PlayerWrapper from "@/components/player/PlayerWrapper"



export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar>{children}</Sidebar>
            <PlayerWrapper/>
          </ThemeProvider>
      </body>
    </html>
  );
}
