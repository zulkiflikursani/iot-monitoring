import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
// import { theme } from "@/config/theme";
import BottomMenu from "@/components/Bottom-menu";
import Link from "next/link";
const APP_NAME = "IoT App";
const APP_DEFAULT_TITLE = "IoT App";
const APP_TITLE_TEMPLATE = "%s - App";
const APP_DESCRIPTION = "Best HydroPro in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <Navbar isBordered>
              <NavbarContent justify="start">
                <NavbarBrand className="mr-4 ">
                  <div
                    className={`${``} flex p-2 justify-center items-center  gap-1 `}
                  >
                    <span className={`font-black text-green-600 ${``}`}>
                      <Link href="/">FH</Link>
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
