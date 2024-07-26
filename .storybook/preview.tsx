import type { Preview } from "@storybook/react";
import { StyleWrapperDecorator } from "./addStyles.decorator";

const preview: Preview = {
  decorators: [StyleWrapperDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
