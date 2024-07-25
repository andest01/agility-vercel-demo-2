import React from "react";
import Link from "next/link";

import { IPostMin, getPostListing } from "lib/cms-content/getPostListing";
import { useAgilityContext } from "lib/cms/useAgilityContext";
import PostListingClient from "./posts-listing.client";
import { getContentItem } from "lib/cms/getContentItem";
import { UnloadedModuleProps } from "@agility/nextjs";
import { DateTime } from "luxon";

interface IPostListing {
  title: string;
  subtitle: string;
  preHeader: string;
}

export interface GetNextPostsProps {
  skip: number;
  take: number;
}

const PostListing = async ({ module, languageCode }: UnloadedModuleProps) => {
  const { sitemap, locale } = useAgilityContext();

  // get posts for the initial page load
  const { posts } = await getPostListing({
    sitemap,
    locale,
    take: 10,
    skip: 0,
  });

  // get next posts for infinite scroll
  const getNextPosts = async ({ skip, take }: GetNextPostsProps) => {
    "use server";

    const postsRes = await getPostListing({
      sitemap: sitemap,
      locale,
      skip,
      take,
    });

    if (postsRes.posts.length > 0) {
      return postsRes.posts;
    } else {
      //HACK: we are just outputting a lot of posts here for now, so we are creating phantom posts...
      //normally you would use skip and take to do paging on a large list.
      const phantomPosts: IPostMin[] = [];
      for (let i = skip; i < skip + take; i++) {
        phantomPosts.push({
          contentID: i + Number(skip),
          title: "Example infinite scrolling. Keep Scrolling!",
          category: "Inifinite Scroll",
          url: "#",
          date: DateTime.fromJSDate(new Date()).toFormat("LLL. dd, yyyy"),
          image: {
            url: `https://placehold.co/600x400?text=Example\\nPlaceholder\\nImage%20${i + 1}`,
            label: "Example Image ",
            width: 800,
            height: 800,
            filesize: 0,
            target: "",
          },
        });
      }
      return phantomPosts;
    }
  };

  // if there are no posts, display message on frontend
  if (!posts || posts.length <= 0) {
    return (
      <div className="mt-44 flex flex-col items-center justify-center px-6">
        <h1 className="text-center text-3xl font-bold">No posts available.</h1>
        <div className="my-10">
          <Link
            href={"/"}
            className="focus:shadow-outline-primary my-3 rounded-md border border-transparent bg-primary-600 px-4 py-3 text-base font-medium leading-6 text-white transition duration-300 hover:bg-primary-500 focus:border-primary-700 focus:outline-none"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return <PostListingClient {...{ posts, sitemap, locale, getNextPosts }} />;
};

export default PostListing;
