import React from "react";
import { AgilityPic, UnloadedModuleProps, renderHTML } from "@agility/nextjs";

import { DateTime } from "luxon";

const PostDetails = async ({ dynamicPageItem }: UnloadedModuleProps) => {
  if (!dynamicPageItem) {
    return <div>Post not found</div>;
  }

  // post fields
  const post = dynamicPageItem.fields;

  // category
  const category = post.category?.fields.title || "Uncategorized";

  // format date
  const dateStr = DateTime.fromJSDate(new Date(post.date)).toFormat(
    "LLL. dd, yyyy",
  );

  return (
    <>
      <div className="relative px-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative h-64 overflow-hidden rounded-lg md:h-96 lg:h-[480px]">
            <AgilityPic
              image={post.image}
              alt={post.image.label}
              className="w-full"
              fallbackWidth={800}
              sources={[
                { media: "(min-width: 1280px)", width: 1200 },
                { media: "(min-width: 640px)", width: 800 },
                { media: "(max-width: 639px)", width: 640 },
              ]}
            />
          </div>
          <div className="mx-auto mt-4 max-w-2xl">
            <div className="text-xs font-bold uppercase leading-loose tracking-widest text-primary-500">
              {category}
            </div>
            <div className="w-8 border-b-2 border-primary-500"></div>
            <div className="mt-4 text-xs font-semibold uppercase italic text-gray-600">
              {dateStr}
            </div>
            <h1 className="font-display my-6 text-4xl font-bold text-secondary-500">
              {post.title}
            </h1>
            <div
              className="prose mb-20 max-w-full"
              dangerouslySetInnerHTML={renderHTML(post.content)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
