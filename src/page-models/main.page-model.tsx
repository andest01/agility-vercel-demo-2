import React from "react";
import { ContentZone } from "@agility/nextjs";
import { getAgilityReactModule } from "./get-module";

// this property came with the starter kit.
// It appears to be dynamic, so the use of `any` is warranted
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainTemplate = (properties: any) => {
  return (
    <div>
      <ContentZone
        name="MainContentZone"
        {...properties}
        getModule={getAgilityReactModule}
      />
    </div>
  );
};

export default MainTemplate;
