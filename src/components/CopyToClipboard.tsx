import * as React from "react";

type Props = {
  value: string;
};
const CopyToClipboard = ({ value }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (inputRef.current) {
      inputRef.current.select();
      try {
        await navigator.clipboard.writeText(inputRef.current.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        readOnly
        value={value}
        style={{ display: "none" }}
      />
      <button className="copy-to-clipboard" type="button" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy to clipboard"}
      </button>
    </>
  );
};

export default CopyToClipboard;
