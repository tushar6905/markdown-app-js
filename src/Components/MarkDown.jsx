import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkDown = () => {
  const [markDown, setMarkDown] = useState('');
  return (
    <>
      <div className="container">
        <textarea
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
          className="textArea"
        ></textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>

        </div>
      </div>
    </>
  );
};

export default MarkDown;
