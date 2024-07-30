"use client";

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useEffect } from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  let message = `An unexpected error has occurred.`;
  let title = `Error`;
  if (error.message === "404") {
    message = `The page you were looking for could not be found.`;
    title = `Page not found`;
  }

  return (
    <section className="relative px-8">
      <div className="md:mt-18 prose prose-sm mx-auto my-12 max-w-2xl lg:prose-lg xl:prose-xl lg:mt-20">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </section>
  );
}
