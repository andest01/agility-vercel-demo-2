import { IAgilityReactModule } from "src/component-models";
import componentModules from "../component-models";
import NoComponentFound from "src/component-models/no-component-found";

export const getAgilityReactModule = (
  moduleIdLowercase: string,
  fallbackComponent: IAgilityReactModule = NoComponentFound,
): IAgilityReactModule => {
  return (
    componentModules.get((moduleIdLowercase || "").toLocaleLowerCase()) ??
    fallbackComponent
  );
};
