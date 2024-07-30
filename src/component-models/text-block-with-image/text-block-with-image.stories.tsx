import { ContentItem } from "@agility/nextjs";
import type { StoryObj } from "@storybook/react";
import {
  ITextBlockWithImage,
  TextBlockWithImageComponent,
} from "./text-block-with-image.pure-component";

const meta = {
  title: "Demo/TextBlockWithImage",
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NQkz41A3hGMk1apPYxISXY/C%26T-x-Radix-Design-System?node-id=5797-7481&m=dev",
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const properties: Pick<
      ContentItem<ITextBlockWithImage>,
      "fields" | "contentID"
    > = {
      contentID: 106,
      fields: {
        title: "From short breaks to long adventures",
        tagline: "Wander The World",
        image: {
          label: "Overhead photo of an Island",
          url: "https://cdn.aglty.io/tut24bkf/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg",
          target: "",
          filesize: 167_559,
          height: 1000,
          width: 1000,
        },
        imagePosition: "right",
        primaryButton: {
          href: "/blog",
          target: "_self",
          text: "Read our blog",
        },
        content:
          "Travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!",
        highPriority: "true",
        tESTdemoUpDownRichTextHello_123: "",
      },
    };
    return <TextBlockWithImageComponent {...properties} />;
  },
  args: {},
};
