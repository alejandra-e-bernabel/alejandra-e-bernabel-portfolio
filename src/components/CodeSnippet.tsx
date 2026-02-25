import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeSnippetProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
}

const CodeSnippet = ({
  code,
  language,
  showLineNumbers = true,
  title,
}: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom style to match portfolio theme
  const customStyle = {
    ...atomDark,
    'pre[class*="language-"]': {
      ...atomDark['pre[class*="language-"]'],
      background: "hsl(0, 0%, 8%)", // Darker for better contrast
      borderRadius: "0.75rem",
      padding: "1.5rem",
      margin: 0,
    },
    'code[class*="language-"]': {
      ...atomDark['code[class*="language-"]'],
      background: "transparent",
      fontSize: "0.9rem", // Slightly larger for readability
      lineHeight: "1.6",
    },
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 shadow-lg min-w-0">
      {title && (
        <div className="bg-[hsl(0,0%,8%)] text-foreground/90 px-5 py-3 text-sm font-medium border-b border-white/10 flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-foreground/50">{language}</span>
        </div>
      )}
      <div className="relative overflow-x-auto min-w-0">
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          showLineNumbers={showLineNumbers}
          customStyle={{
            background: "hsl(0, 0%, 8%)",
            borderRadius: title ? "0" : "0.75rem",
            padding: "1.5rem",
            margin: 0,
          }}
          lineNumberStyle={{
            color: "hsl(0, 0%, 45%)",
            minWidth: "3em",
            paddingRight: "1.5em",
            userSelect: "none",
            borderRight: "1px solid hsl(0, 0%, 20%)",
            marginRight: "1em",
          }}
        >
          {code}
        </SyntaxHighlighter>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all bg-pink-600/20 hover:bg-pink-600 text-white border border-pink-600/30"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CodeSnippet;
