import { renderHTML, UnloadedModuleProps } from "@agility/nextjs";
import { getContentItem } from "lib/cms/getContentItem";

interface RichText {
  textblob: string;
}

const RichTextArea = async ({ module, languageCode }: UnloadedModuleProps) => {
  const {
    fields: { textblob },
    contentID,
  } = await getContentItem<RichText>({
    contentID: module.contentid,
    languageCode,
  });

  return (
    <section
      id={`${contentID}`}
      className="relative px-8"
      data-agility-component={contentID}
    >
      <div className="md:mt-18 mx-auto my-12 max-w-2xl lg:mt-20">
        <div
          data-agility-field="textblob"
          data-agility-html
          className="prose prose-sm my-6 max-w-full sm:prose lg:prose-lg xl:prose-xl"
          dangerouslySetInnerHTML={renderHTML(textblob)}
        ></div>
      </div>
    </section>
  );
};

export default RichTextArea;
