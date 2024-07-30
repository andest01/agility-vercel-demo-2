import { ContentItemRequestParams } from "@agility/content-fetch/dist/methods/getContentItem";
import getAgilitySDK from "lib/cms/getAgilitySDK";
import { cacheConfig } from "lib/cms/cacheConfig";
import { ContentItem } from "@agility/content-fetch";

/**
 * Get a content item with caching information added.
 * @param params
 * @returns
 */
export const getContentItem = async <T>(
  parameters: ContentItemRequestParams,
) => {
  const agilitySDK = getAgilitySDK();

  agilitySDK.config.fetchConfig = {
    next: {
      tags: [
        `agility-content-${parameters.contentID}-${parameters.languageCode || parameters.locale}`,
      ],
      revalidate: cacheConfig.cacheDuration,
    },
  };

  return (await agilitySDK.getContentItem(parameters)) as ContentItem<T>;
};
