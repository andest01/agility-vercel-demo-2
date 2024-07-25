import React from "react";
import {
  AgilityPic,
  ContentItem,
  ImageField,
  Module,
  URLField,
  UnloadedModule,
  UnloadedModuleProps,
} from "@agility/nextjs";
import Link from "next/link";
import getAgilitySDK from "lib/cms/getAgilitySDK";
import { getContentItem } from "lib/cms/getContentItem";
import {
  ITextBlockWithImage,
  TextBlockWithImageComponent,
} from "./text-block-with-image.pure-component";

/**
 * Text Block With Image.  This is "unloaded" since we have set the depth property to 0 when fetching the page.
 * @param param0
 * @returns
 */
const TextBlockWithImage = async ({
  module,
  languageCode,
}: UnloadedModuleProps) => {
  const tony = await getContentItem<ITextBlockWithImage>({
    contentID: module.contentid,
    languageCode,
  });

  return <TextBlockWithImageComponent {...tony} />;
};

export default TextBlockWithImage;
