import { AgilityPic, renderHTML } from "@agility/nextjs";
import OutputNestedContentItem from "./output-nested-content-item";
import { useEffect, useMemo, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { default as cn } from "classnames";

interface OutputFieldProperties {
  fieldName: string;
  // this property came with the starter kit.
  // It appears to be dynamic, so the use of `any` is warranted
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldValue: any;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function OutputField({
  fieldName,
  fieldValue,
}: OutputFieldProperties) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isJSON, setIsJSON] = useState(false);
  const [jsonValue, setJsonValue] = useState<string | null>(null);

  const fieldValueString = `${fieldValue}`;
  const isNestedContentItem = fieldValue?.contentID > 0 && fieldValue?.fields;
  const isString = typeof fieldValue === "string";
  const isHtml =
    fieldValueString.startsWith("<") && fieldValueString.endsWith(">");
  const isImage = !!(fieldValue?.url && fieldValue?.label);

  useEffect(() => {
    let object = null;
    let isit = false;

    if (isNestedContentItem) {
      //if we KNOW it's a content item...
      return;
    } else {
      //test it by parsing
      try {
        if (typeof fieldValue === "object") {
          object = fieldValue;
          isit = true;
        } else {
          object = JSON.parse(fieldValue);

          isit =
            fieldValueString.startsWith("{") ||
            fieldValueString.startsWith("[");
        }
      } catch {
        // empty
      }
    }

    if (isit) {
      setJsonValue(JSON.stringify(object, null, 2));
    }

    setIsJSON(isit);
  }, [fieldValue, fieldValueString, isNestedContentItem]);

  const isExpandable = useMemo(() => {
    return (
      isJSON || isHtml || isImage || (isString && fieldValueString.length > 150)
    );
  }, [isJSON, isHtml, isImage, isString, fieldValueString.length]);

  return (
    <div key={fieldName}>
      <h3 className="text-lg font-semibold text-gray-600">
        {isExpandable ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 transition-all hover:text-purple-600"
          >
            <span>{fieldName}:</span>
            <FaCaretDown
              className={cn(
                "transition-transform",
                isExpanded ? "rotate-0" : "-rotate-90",
              )}
            />
          </button>
        ) : (
          <span>{fieldName}:</span>
        )}
      </h3>
      <div className="text-gray-500">
        {fieldValue?.contentID > 0 && fieldValue?.fields ? (
          <OutputNestedContentItem contentItem={fieldValue} />
        ) : isImage ? (
          <div className="rounded border border-gray-200 bg-white">
            <div
              className={cn(
                "overflow-auto transition-all",
                isExpanded ? "max-h-full" : "max-h-32",
              )}
            >
              <AgilityPic
                image={fieldValue}
                fallbackWidth={500}
                className="w-full rounded-t"
              />
            </div>
            <div className="p-1 pt-2 text-center text-sm">
              {fieldValue.label}
            </div>
          </div>
        ) : isHtml ? (
          //assume html field...

          <div className="overflow-auto rounded border border-gray-200 bg-white">
            <div
              className={cn(
                "overflow-auto p-2 transition-all",
                isExpanded ? "max-h-full" : "max-h-32",
              )}
            >
              <div
                className="prose prose-sm"
                dangerouslySetInnerHTML={renderHTML(fieldValueString)}
              />
            </div>
          </div>
        ) : fieldValue?.href && fieldValue?.text ? (
          <div className="flex items-center gap-1">
            <div className="font-medium">Href:</div>
            <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-800">
              {fieldValue.href}
            </div>
            <div className="font-medium">Text:</div>
            <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-800">
              {fieldValue.text}
            </div>
            <div className="font-medium">Target:</div>
            <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-800">
              {fieldValue.target || ""}
            </div>
          </div>
        ) : isString ? (
          <div className={cn(isExpanded ? "" : "max-h-20 overflow-auto")}>
            {fieldValue}
          </div>
        ) : isJSON ? (
          <div className="overflow-auto rounded bg-gray-200">
            <div
              className={cn(
                "overflow-auto transition-all",
                isExpanded ? "max-h-full" : "max-h-32",
              )}
            >
              <pre className="text-xs">{jsonValue}</pre>
            </div>
          </div>
        ) : (
          <div className="max-h-20 overflow-auto">
            {JSON.stringify(fieldValue)}
          </div>
        )}
      </div>
    </div>
  );
}
