import React from "react";
import { ContentZone } from "@agility/nextjs";
import { getAgilityReactModule } from "./get-module";
// import { getModule } from "../component-models";

const MainTemplate = (props: any) => {
  return (
    <div>
      <ContentZone
        name="MainContentZone"
        {...props}
        getModule={getAgilityReactModule}
      />
    </div>
  );
};

export default MainTemplate;
