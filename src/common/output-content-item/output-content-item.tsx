"use client";
import { ContentItem } from "@agility/content-fetch";

import OutputField from "./output-field";
import RawContentItem from "./raw-content-item";

interface OutputContentItemProperties {
  contentItem: ContentItem;
}

export default function OutputContentItem({
  contentItem,
}: OutputContentItemProperties) {
  return (
    <div className="p-6">
      <div className="mx-auto rounded-md border border-red-200 bg-white p-6 shadow-md shadow-red-500">
        <div>
          <span className="rounded-full bg-red-200 px-2 py-1 text-sm font-medium uppercase text-red-800">
            Component not found
          </span>
        </div>
        <h2 className="my-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-700">
            {contentItem.properties.definitionName}
          </span>
        </h2>

        <h3 className="border-b border-b-gray-300 text-xl font-bold text-gray-600">
          Fields
        </h3>
        <div className="mt-2 flex flex-col gap-4">
          {Object.keys(contentItem.fields).map((fieldName) => (
            <OutputField
              key={fieldName}
              fieldName={fieldName}
              fieldValue={contentItem.fields[fieldName]}
            />
          ))}
        </div>

        <RawContentItem contentItem={contentItem} />
      </div>
    </div>
  );
}
