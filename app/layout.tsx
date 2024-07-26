import { draftMode } from "next/headers";
import LoadingWidget from "src/common/LoadingWidget";
import PreviewBar from "src/common/PreviewBar";
import SiteFooter from "src/common/SiteFooter";
import SiteHeader from "src/common/SiteHeader";

import { useAgilityContext } from "lib/cms/useAgilityContext";

import { Inter } from "next/font/google";

import "/styles/globals.css";

import { getHeaderContent } from "lib/cms-content/getHeaderContent";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, sitemap, isDevelopmentMode, isPreview } = useAgilityContext();

  const header = await getHeaderContent({ sitemap, locale });

  async function startPreviewMode(pathname: string) {
    "use server";

    //turn on draft/preview mode
    draftMode().enable();

    // Redirect to the same page
    let url = `${pathname}`;
    if (url.includes("?")) {
      url = `${url}&preview=1`;
    } else {
      url = `${url}?preview=1`;
    }
    redirect(url);
  }

  return (
    <html lang="en" className={inter.className}>
      <body data-agility-guid={process.env.AGILITY_GUID}>
        <div id="site-wrapper">
          <div id="site">
            <PreviewBar
              {...{ isDevelopmentMode, isPreview, startPreviewMode }}
            />

            <div className="flex min-h-screen flex-col">
              <SiteHeader {...{ header }} />

              <main className={`flex-grow`}>{children}</main>
              <SiteFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
