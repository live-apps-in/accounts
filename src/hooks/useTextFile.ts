import { useState } from "react";
import { downloadLink } from "src/utils";

export function useTextFile({ fileName: initialFileName }) {
  const [fileName, setFileName] = useState(initialFileName);
  const [textFileLink, setTextFileLink] = useState<any>(document.createElement("a"));
  let insert = (text) => {
    setTextFileLink(
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
  };

  let download = () => {
    downloadLink({ link: textFileLink, name: fileName });
  };

  return { insert, download, setFileName };
}
