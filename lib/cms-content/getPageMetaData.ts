import { AgilityPageProps } from "@agility/nextjs";
import ReactHtmlParser from "html-react-parser";
import { Metadata } from "next";
export const getPageMetaData = (agilityPage: AgilityPageProps) => {
  const metaHTML = agilityPage.page?.seo?.metaHTML;

  // setup and parse additional header markup
  let additionalHeaderMarkup = null;
  if (metaHTML) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    additionalHeaderMarkup = ReactHtmlParser(metaHTML);
  }

  const metadata: Metadata = {
    title: agilityPage.sitemapNode?.title,
    description: agilityPage.page?.seo?.metaDescription,
    keywords: agilityPage.page?.seo?.metaKeywords,
  };

  return metadata;
};
