import {
  AgilityPic,
  ContentItem,
  ImageField,
  renderHTML,
  URLField,
} from "@agility/nextjs";
import Link from "next/link";

export interface ITextBlockWithImage {
  title: string;
  content: string;
  tagline?: string;
  imagePosition: "left" | "right";
  image: ImageField;
  primaryButton: URLField;
  highPriority?: string;
  ["tESTdemoUpDownRichTextHello_123"]: string;
}

const isUrlAbsolute = (url: string) =>
  url.indexOf("://") > 0 || url.indexOf("//") === 0;

// function to generate proper link
const generateLink = (url: string, target: string, text: string) => {
  // if relative link, use next/link
  if (isUrlAbsolute(url) === false) {
    return (
      <Link
        data-agility-field="primaryButton"
        href={url}
        title={text}
        target={target}
        className="focus:shadow-outline-indigo mt-8 inline-block rounded-md border border-transparent bg-primary-500 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:border-primary-700 focus:outline-none active:bg-indigo-700 md:mt-8"
      >
        {text}
      </Link>
    );
  } else {
    // else use anchor tag
    return (
      <a
        data-agility-field="primaryButton"
        href={url}
        title={text}
        target={target}
        className="focus:shadow-outline-indigo mt-8 inline-block rounded-md border border-transparent bg-primary-500 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:border-primary-700 focus:outline-none active:bg-indigo-700 md:mt-8"
      >
        {text}
      </a>
    );
  }
};

export const TextBlockWithImageComponent = (
  content: Pick<ContentItem<ITextBlockWithImage>, "fields" | "contentID">,
) => {
  console.log(content);
  const { fields, contentID } = content;
  //determine if the image should be high priority
  const priority = fields.highPriority === "true";

  return (
    <div className="relative px-8" data-agility-component={contentID}>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between py-20 md:flex-row md:py-24">
        <div className="relative shrink-0 md:w-6/12" data-agility-field="image">
          {fields.primaryButton ? (
            <Link href={fields.primaryButton.href} className="relative">
              <AgilityPic
                image={fields.image}
                className="rounded-lg object-cover object-center"
                priority={priority}
                fallbackWidth={600}
                sources={[
                  //screen at least than 640, it's 1/2 of the screen, so the same size as the prev breakpoint
                  { media: "(min-width: 1280px)", width: 800 },
                  { media: "(min-width: 640px)", width: 640 },
                  //screen less than 640, full width of screen
                  { media: "(max-width: 639px)", width: 640 },
                ]}
              />
            </Link>
          ) : (
            <AgilityPic
              image={fields.image}
              className="rounded-lg object-cover object-center"
              priority={priority}
              fallbackWidth={600}
              sources={[
                //screen at least than 640, it's 1/2 of the screen, so the same size as the prev breakpoint
                { media: "(min-width: 1280px)", width: 800 },
                { media: "(min-width: 640px)", width: 640 },
                //screen less than 640, full width of screen
                { media: "(max-width: 639px)", width: 640 },
              ]}
            />
          )}
        </div>
        <div
          className={`mt-16 md:mt-0 md:w-6/12 ${
            fields.imagePosition === "right"
              ? `md:order-first md:mr-12 lg:mr-16`
              : `md:order-last md:ml-12 lg:ml-16`
          }`}
        >
          <div className="g:py-8 text-center md:text-left">
            {fields.tagline && (
              <div
                data-agility-field="tagline"
                className="py-1 text-center text-sm font-bold uppercase text-primary-500 md:text-left"
              >
                {fields.tagline}
              </div>
            )}
            <h2
              data-agility-field="title"
              className="font-display mt-4 text-center text-4xl font-black tracking-wide text-secondary-500 md:text-left md:text-3xl lg:text-5xl lg:leading-tight"
            >
              {fields.title}
            </h2>
            <p
              data-agility-field="content"
              className="mt-4 text-center text-sm font-medium leading-relaxed text-secondary-200 md:text-left md:text-base lg:text-lg"
            >
              {fields.content}
            </p>
            {fields.primaryButton &&
              generateLink(
                fields.primaryButton.href,
                fields.primaryButton.target,
                fields.primaryButton.text,
              )}
          </div>
        </div>
      </div>
      <h1>weird stuff below</h1>
      <div
        data-agility-field="textblob"
        data-agility-html
        className="prose prose-sm my-6 max-w-full sm:prose lg:prose-lg xl:prose-xl"
        dangerouslySetInnerHTML={renderHTML(
          fields.tESTdemoUpDownRichTextHello_123,
        )}
      />
    </div>
  );
};
