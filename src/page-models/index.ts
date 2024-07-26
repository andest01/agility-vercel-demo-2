import MainPage from "./main.page-model";

// All of the Agility Page Template Components that are in use in this site need to be imported into this index file.
// Place Page Templates in allTemplates array below, passing in a name and the component.

const allTemplates = [{ name: "MainTemplate", template: MainPage }];

export const getPageTemplate = (templateName: string) => {
  if (!templateName) return null;
  const object = allTemplates.find(
    (m) => m.name.toLowerCase() === templateName.toLowerCase(),
  );
  if (!object) return null;
  return object?.template;
};
