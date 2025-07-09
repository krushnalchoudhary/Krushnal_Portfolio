import React, { useEffect, useState } from "react";
import "./CodingTerminal.css";

const codeLines = [
  "Initializing neural interface...",
  "Loading bio-synthetic compiler...",
  "Accessing encrypted portfolio nodes...",
  "Decrypting visuals > AI: ✅",
  "Launching futuristic UI module...",
  "✅ Ready. Welcome to my code universe."
];

const CodingTerminal = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="terminal-container">
      <div className="terminal-overlay" />
      <div className="terminal-content">
        <div className="terminal-header">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <div className="terminal-body">
          {codeLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="terminal-line">
              <span className="prefix">$</span> {line}
            </div>
          ))}
          {currentLine < codeLines.length && (
            <div className="typing-cursor">█</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingTerminal;
