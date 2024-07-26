"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IPostMin } from "lib/cms-content/getPostListing";
import InfiniteScroll from "react-infinite-scroll-component";
import { AgilityPic } from "@agility/nextjs";
import { GetNextPostsProps } from "./posts-listing.server";

interface Props {
  posts: IPostMin[];
  locale: string;
  sitemap: string;
  getNextPosts: ({ skip, take }: GetNextPostsProps) => Promise<IPostMin[]>;
}

const PostListingClient = ({ posts, locale, sitemap, getNextPosts }: Props) => {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState(posts);

  const fetchPosts = async () => {
    try {
      //call the server action declared in the server component to get the next page of posts...
      const morePosts = await getNextPosts({ skip: items.length, take: 10 });

      setItems((prev) => {
        return [...prev, ...morePosts];
      });
      setHasMore(morePosts.length > 0);
    } catch (error) {
      console.error("error fetching more posts", error);
      setHasMore(false);
    }
  };

  return (
    <div className="relative mb-12 px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchPosts}
            hasMore={hasMore} // Replace with a condition based on your data source
            loader={<p>Loading...</p>}
            endMessage={<p>No more posts!</p>}
            className="grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          >
            {items.map((post) => (
              <Link href={post.url} key={post.contentID}>
                <div className="group mb-8 flex-col md:mb-0">
                  <div className="relative h-64 w-full text-clip">
                    {post.image.url.includes("https://placehold.co/") ? (
                      //*** special case for placeholder images ***
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image.url}
                        alt={post.image.label}
                        className="w-full rounded-t-lg object-cover object-center"
                      />
                    ) : (
                      //*** normal case ***
                      <AgilityPic
                        image={post.image}
                        className="w-full rounded-t-lg object-cover object-center"
                        fallbackWidth={800}
                        sources={[
                          //screen at least than 1280, it's 1/3 of the screen
                          {
                            media: "(min-width: 1280px)",
                            width: 480,
                          },

                          //screen at least than 640, it's 1/2 of the screen
                          { media: "(min-width: 640px)", width: 640 },
                          //screen less than 640, full width of screen
                          { media: "(max-width: 639px)", width: 640 },
                        ]}
                      />
                    )}
                  </div>
                  <div className="rounded-b-lg border-2 border-t-0 bg-gray-100 p-8">
                    <div className="text-xs font-bold uppercase leading-loose tracking-widest text-primary-500">
                      {post.category}
                    </div>
                    <div className="w-8 border-b-2 border-primary-500"></div>
                    <div className="mt-4 text-xs font-semibold uppercase italic text-gray-600">
                      {post.date}
                    </div>
                    <h2 className="mt-1 text-2xl font-black text-secondary-500 transition duration-300 group-hover:text-primary-500">
                      {post.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default PostListingClient;
