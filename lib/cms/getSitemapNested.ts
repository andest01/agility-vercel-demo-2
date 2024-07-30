import getAgilitySDK from "lib/cms/getAgilitySDK";
import { cacheConfig } from "lib/cms/cacheConfig";

import { SitemapNestedRequestParams } from "@agility/content-fetch/dist/methods/getSitemapNested";

/**
 * Get the nested sitemap for the given language code, with caching information added.
 * @param parameters
 * @returns
 */
export const getSitemapNested = async (
  parameters: SitemapNestedRequestParams,
) => {
  const agilitySDK = getAgilitySDK();

  agilitySDK.config.fetchConfig = {
    next: {
      tags: [
        `agility-sitemap-nested-${parameters.languageCode || parameters.locale}`,
      ],
      revalidate: cacheConfig.cacheDuration,
    },
  };

  return await agilitySDK.getSitemapNested(parameters);
};
