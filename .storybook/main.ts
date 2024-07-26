import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: [
    // Share whatever is in the public directory as `/*`
    // so if you have "../public/favicon.ico", you could get it at localhost:6006/favicon.ico,
    // ...or `../public/assets/agility-preview-logo.svg` --> "/assets/agility-preview-logo.svg"
    { from: "../public", to: "/" },
    // place our storybook stuff in a different directory so it's easier to find.
    // If you wanted to, you could also serve it off of `/public/*` too. Up to you.
    { from: "../public-storybook", to: "/public-storybook" },
  ],
};
export default config;
