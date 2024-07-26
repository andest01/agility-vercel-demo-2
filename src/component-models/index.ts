import RichTextArea from "./rich-text-area";
import FeaturedPost from "./featured-post";
import PostsListing from "./PostsListing/posts-listing.server";
import PostDetails from "./post-details";
import Heading from "./heading-text";
import TextBlockWithImage from "./text-block-with-image/text-block-with-image.agility-component";
import BigJonnyMan from "./big-jonny-man";
import { UnloadedModuleProps } from "@agility/nextjs";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

export type IAgilityReactModule = ({
  module,
  languageCode,
}: UnloadedModuleProps) => Promise<JSX.Element | null>;

export interface IAgilityToReactLookupItem {
  name: string;
  module: IAgilityReactModule;
}

const allModules = new Map<string, IAgilityReactModule>();
allModules.set("Heading".toLowerCase(), Heading);
allModules.set("FeaturedPost".toLowerCase(), FeaturedPost);
allModules.set("PostsListing".toLowerCase(), PostsListing);
allModules.set("PostDetails".toLowerCase(), PostDetails);
allModules.set("RichTextArea".toLowerCase(), RichTextArea);
allModules.set("BigJonnyMan".toLowerCase(), BigJonnyMan);
allModules.set("TextBlockWithImage".toLowerCase(), TextBlockWithImage);

export default Object.freeze(allModules);
