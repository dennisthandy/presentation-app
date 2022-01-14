import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { PresentationData } from "../../helper/types";
import "./styles.css";

export default function Content() {
  const { state } = useContext(Context);
  const { content, menu } = state;

  const [displayContent, setDisplayContent] = useState<
    PresentationData | undefined
  >();

  useEffect(() => {
    const [selectedContent] = content.data.filter(
      (item) => item.key === menu.selected
    );
    if (selectedContent) {
      setDisplayContent(selectedContent.data);
    } else {
      setDisplayContent(undefined)
    }
    
  }, [menu.selected]);

  return (
    <div className="flex flex-col flex-grow h-screen p-2 bg-gray-300">
      <div className="screen">
        {displayContent && (
          <>
            <p className="title">{displayContent?.title}</p>
            <p className="description">{displayContent?.description}</p>
          </>
        )}
        {!displayContent && <p>No content to display.</p>}
      </div>
    </div>
  );
}
