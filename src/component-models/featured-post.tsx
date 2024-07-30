import Link from "next/link";
import { DateTime } from "luxon";
import { stripHtml } from "string-strip-html";
import { AgilityPic, ContentItem, UnloadedModuleProps } from "@agility/nextjs";
import { IPost } from "../../lib/types/IPost";
import { getContentItem } from "lib/cms/getContentItem";

interface IFeaturedPostModule {
  featuredPost?: {
    contentid: number;
  };
}

const FeaturedPost = async ({ module, languageCode }: UnloadedModuleProps) => {
  const { fields } = await getContentItem<IFeaturedPostModule>({
    contentID: module.contentid,
    languageCode,
    contentLinkDepth: 0,
  });

  if (fields.featuredPost?.contentid === undefined) return null;

  const featuredPost: ContentItem<IPost> = await getContentItem<IPost>({
    contentID: fields.featuredPost?.contentid,
    languageCode,
    contentLinkDepth: 1,
  });

  let dateString = "";
  let contentString = "";
  if (featuredPost) {
    // convert date to str in a way that will work on the server and client with the same value
    dateString = DateTime.fromJSDate(
      new Date(featuredPost.fields.date),
    ).toFormat("LLL. dd, yyyy");
    //strip out html tags to build an excerpt
    contentString = stripHtml(featuredPost?.fields.content || "").result;
    if (contentString.length > 200)
      contentString = `${contentString.slice(0, 200)}...`;
  }

  if (!featuredPost) return null;

  return (
    <div className="relative mb-8 px-8">
      <div className="group mx-auto flex max-w-screen-xl flex-col pt-8 sm:flex-row">
        <div className="relative sm:w-1/2 sm:rounded-l-lg sm:rounded-t-none lg:w-2/3">
          <Link
            href={`/blog/${featuredPost.fields.slug}`}
            className="cursor-pointer"
          >
            <div className="relative h-64 w-full sm:h-96">
              {/* Agility Pic - outputs a <picture> tag */}
              <AgilityPic
                image={featuredPost.fields.image}
                className="h-full w-full rounded-t-lg object-cover object-center sm:rounded-l-lg sm:rounded-tr-none"
                priority
                fallbackWidth={800}
                sources={[
                  //screen at least than 640, it's 1/2 of the screen, so the same size as the prev breakpoint
                  { media: "(min-width: 1280px)", width: 800 },
                  { media: "(min-width: 640px)", width: 640 },
                  //screen less than 640, full width of screen
                  { media: "(max-width: 639px)", width: 640 },
                ]}
              />

              {/*
								OR you can use AgilityImage - A wrapper for next/image - MUST be used from the component with "use client"
								to test out the following code,
									- uncomment the component below
									- add "use client" to the top of this file
									- add AgilityImage to the "@agility/nextjs" import at the top of the file
							*/}

              {/* <AgilityImage
								src={featuredPost.fields.image.url}
								alt={featuredPost.fields.image.label}
								className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
								priority
								fill
								sizes="(max-width: 640px) 100vw,
												50vw"
							/> */}
            </div>
          </Link>
        </div>
        <div className="relative rounded-b-lg border-2 border-t-0 bg-gray-100 p-8 sm:w-1/2 sm:rounded-r-lg sm:rounded-bl-none sm:border-l-0 sm:border-t-2 lg:w-1/3">
          <Link
            href={`/blog/${featuredPost.fields.slug}`}
            className="cursor-pointer"
          >
            <div className="font-display after:content text-xs font-bold uppercase leading-loose tracking-widest text-primary-500">
              {featuredPost.fields.category.fields.title}
            </div>
            <div className="w-8 border-b-2 border-primary-500"></div>
            <div className="mt-4 text-xs font-semibold uppercase italic text-gray-600">
              {dateString}
            </div>
            <h2 className="font-display mt-1 text-2xl font-black text-secondary-500 transition duration-300 group-hover:text-primary-500">
              {featuredPost.fields.title}
            </h2>
            <p className="mt-3 line-clamp-4 text-sm font-medium leading-loose text-gray-600">
              {contentString}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
