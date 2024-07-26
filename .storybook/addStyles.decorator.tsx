// first, just like, import our styles.
import "../styles/globals.css";
import React from "react";
// used for fonts. this can be removed.
// TODO: DELETE THIS IF YOU WANT.
// THIS WAS PULLED FROM OUR DEFAULT PROJECT
// FROM AGILITY'S DEMO
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const StyleWrapperDecorator = (Story) => (
  // for storybook purposes, add any needed classes here
  <div className="flex flex-col min-h-screen">
    <div className={`${inter.className} flex-grow`}>
      <Story />
    </div>
  </div>
);
