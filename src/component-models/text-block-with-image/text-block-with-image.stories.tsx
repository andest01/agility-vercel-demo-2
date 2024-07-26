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
  render: (args: any) => {
    const props: Pick<
      ContentItem<ITextBlockWithImage>,
      "fields" | "contentID"
    > = {
      contentID: 106,
      properties: {
        state: 2,
        modified: "2023-10-14T14:52:45.257",
        versionID: 1053,
        referenceName: "home_textblockwithimage",
        definitionName: "TextBlockWithImage",
        itemOrder: 0,
      },
      fields: {
        title: "From short breaks to long adventures",
        tagline: "Wander The World",
        image: {
          label: "Overhead photo of an Island",
          url: "https://cdn.aglty.io/tut24bkf/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg",
          target: null,
          filesize: 167559,
          pixelHeight: "1000",
          pixelWidth: "1000",
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
      },
    };
    return <TextBlockWithImageComponent {...props} />;
  },
  args: {},
};
