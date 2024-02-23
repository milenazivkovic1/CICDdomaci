import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (timeDisabled = null) => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (textToCopy) => {
    copy(textToCopy.toString());
    setCopied(true);
  };

  useEffect(() => {
    if (!isCopied) return;
    let timeOut = window.setTimeout(() => setCopied(false), timeDisabled);
    return () => window.clearTimeout(timeOut);
  }, [isCopied, timeDisabled]); // Dodajemo timeDisabled u niz zavisnosti

  return [isCopied, handleCopy];
};
