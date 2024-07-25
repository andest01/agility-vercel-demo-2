"use client";
import { ContentItem } from "@agility/content-fetch";
import OutputField from "./output-field";
import RawContentItem from "./raw-content-item";

interface Props {
  contentItem: ContentItem;
}

export default function OutputNestedContentItem({ contentItem }: Props) {
  return (
    <div className="mt-2">
      <div className="mx-auto rounded border border-gray-200 bg-gray-50 p-4">
        <div>
          <span className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium uppercase text-gray-800">
            Linked Content Item
          </span>
        </div>
        <h2 className="my-2 flex items-baseline gap-2">
          <span className="text-xl font-medium text-gray-700">
            {contentItem.properties.definitionName}
          </span>
          <span>({contentItem.properties.referenceName})</span>
        </h2>

        <h3 className="text-lg font-medium text-gray-600">Fields</h3>
        <div className="ml-3 flex flex-col gap-4">
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
