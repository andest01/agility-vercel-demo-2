import { Module, UnloadedModuleProps } from "@agility/nextjs";
import InlineError from "src/common/inline-error";
import OutputContentItem from "src/common/output-content-item/output-content-item";
import { getContentItem } from "lib/cms/getContentItem";

const NoComponentFound = async ({
  module,
  languageCode,
  isDevelopmentMode,
  isPreview,
}: UnloadedModuleProps) => {
  const contentItem = await getContentItem<any>({
    contentID: module.contentid,
    languageCode,
  });

  if (isDevelopmentMode || isPreview) {
    //in development mode, show the error
    return <OutputContentItem contentItem={contentItem} />;
  } else {
    //in production mode, just keep on truckin' after throwing a warning in the log
    console.warn(
      "Agility: No Component form for:",
      contentItem?.properties.definitionName,
    );
    return null;
  }
};

export default NoComponentFound;
