import "server-only";
import { getAgilityPageProps } from "@agility/nextjs/node";
import { getAgilityContext } from "./useAgilityContext";

export interface PageProperties {
  params: { slug: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

/**
 * Get a page with caching information added.
 * @param param0
 * @returns
 */
export const getAgilityPage = async ({ params }: PageProperties) => {
  const { isPreview: preview, locale } = getAgilityContext();

  if (!params.slug) params.slug = [""];

  return await getAgilityPageProps({
    params,
    preview,
    locale,
    apiOptions: {
      contentLinkDepth: 0,
    },
  });
};
