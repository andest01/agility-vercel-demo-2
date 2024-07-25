import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { default as cn } from "classnames";

interface Props {
  contentItem: any;
}

export default function RawContentItem({ contentItem }: Props) {
  const [jsonExpanded, setJsonExpanded] = useState(false);

  return (
    <>
      <h3 className="pt-6 text-lg font-medium text-gray-600">
        <button
          onClick={() => setJsonExpanded(!jsonExpanded)}
          className="flex items-center gap-1 transition-all hover:text-purple-600"
        >
          <span>View Raw Content Item</span>
          <FaCaretDown
            className={cn(
              "transition-transform",
              jsonExpanded ? "rotate-0" : "-rotate-90",
            )}
          />
        </button>
      </h3>
      <div
        className={cn(
          "overflow-hidden transition-all",
          jsonExpanded ? "h-auto" : "h-0",
        )}
      >
        <pre
          className={cn(
            "text-sm  bg-gray-100 rounded p-4 border border-gray-300  transition-transform",
            jsonExpanded ? "translate-y-0" : "-translate-y-full",
          )}
        >
          {JSON.stringify(contentItem, null, 2)}
        </pre>
      </div>
    </>
  );
}
