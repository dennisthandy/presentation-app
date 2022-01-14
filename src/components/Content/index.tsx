import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";

export default function Content() {
  const { state } = useContext(Context);
  const { content, menu } = state;

  const [displayContent, setDisplayContent] = useState({});

  useEffect(() => {
    const [selectedContent] = content.data.filter(item => item.key === menu.selected);
    setDisplayContent(selectedContent)
  }, [menu.selected])

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="screen">
        <p>{JSON.stringify(displayContent)}</p>
      </div>
    </div>
  );
}
