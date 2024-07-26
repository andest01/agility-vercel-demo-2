import React from "react";
import { ContentZone } from "@agility/nextjs";
import { getAgilityReactModule } from "./get-module";
// import { getModule } from "../component-models";

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
