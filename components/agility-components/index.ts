import RichTextArea from "./rich-text-area";
import FeaturedPost from "./featured-post";
import PostsListing from "./PostsListing/posts-listing.server";
import PostDetails from "./post-details";
import Heading from "./heading";
import TextBlockWithImage from "./text-block-with-image";
import NoComponentFound from "./no-component-found";
import BigJonnyMan from "./big-jonny-man";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "TextBlockWithImage", module: TextBlockWithImage },
  { name: "Heading", module: Heading },
  { name: "FeaturedPost", module: FeaturedPost },
  { name: "PostsListing", module: PostsListing },
  { name: "PostDetails", module: PostDetails },
  { name: "RichTextArea", module: RichTextArea },
  { name: "BigJonnyMan", module: BigJonnyMan },
];

/**
 * Get the Agility Component/Module by name.
 * If the component is not found, a default component will be returned.
 * @param moduleName
 * @returns
 */
export const getModule = (moduleName: string): any | null => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase(),
  );
  if (!obj) return NoComponentFound;
  return obj.module;
};
