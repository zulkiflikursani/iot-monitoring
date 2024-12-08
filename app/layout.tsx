import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
// import { theme } from "@/config/theme";
import BottomMenu from "@/components/Bottom-menu";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <Navbar isBordered>
              <NavbarContent justify="start">
                <NavbarBrand className="mr-4 ">
                  <div
                    className={`${``} flex p-2 justify-center items-center  gap-1 `}
                  >
                    <span className={`font-black text-green-600 ${``}`}>
                      FH
                    </span>
                    <h4
                      className={`${``} text-foreground-800 font-bold tracking-tighter`}
                    >
                      FindHydroPro
                    </h4>
                  </div>
                </NavbarBrand>
              </NavbarContent>
              {/* <NavbarContent>
          <NavbarItem></NavbarItem>
        </NavbarContent> */}
              {/* <NavbarContent>
                <Input name="search" placeholder="Cari barang ..." />
              </NavbarContent> */}
            </Navbar>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <BottomMenu />
          </div>
        </Providers>
      </body>
    </html>
  );
}
