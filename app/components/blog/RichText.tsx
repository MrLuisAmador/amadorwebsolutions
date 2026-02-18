import {
  RichText as LexicalRichText,
  defaultJSXConverters,
} from "@payloadcms/richtext-lexical/react";
import type { Blog } from "../../../payload-types";

interface RichTextProps {
  content: Blog["content"];
}

export function RichText({ content }: RichTextProps) {
  if (!content?.root) return null;

  return (
    <LexicalRichText
      data={content}
      converters={{
        ...defaultJSXConverters,
        blocks: {
          ...defaultJSXConverters.blocks,
          Code: ({ node }) => {
            const fields =
              "fields" in node && node.fields
                ? (node.fields as { code?: string; language?: string })
                : {};
            return (
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4">
                <code className={`language-${fields.language || "text"}`}>
                  {fields.code || ""}
                </code>
              </pre>
            );
          },
        },
      }}
    />
  );
}
