import React, { useState, useEffect } from 'react';
import "../components/styles/Introduction.css";

const lines = [
  "400 BCE.",
  "The Zhou Dynasty of Ancient China is unraveling...",
  "Amidst constant turmoil, insecurity, and lack of cohesion, the Mandate of Heaven begins to wane.",
  "As the Warring States period ensues, people seek new and innovative strategies to govern.",
  "The country. The people. And themselves.",
  "What they create becomes known as the 'Hundred Schools of Thought'.",
  "Among these are Daoism and Confucianism...",
  "Seemingly opposite, they both embed themselves in the fabric of Chinese society.",
  "One liberates the individual by teaching 'effortless action', encouraging people to act in harmony with what is natural, unforced and spontaneous.",
  "The other grounds them, emphasising righteousness, honour and duty.",
  "It has been over 2000 years and these principles are still enmeshed in the world today.",
  "This app will attempt to show you how different aspects of yourself may prefer a more Daoist or Confucianist approach to life."
];

const Introduction = ({ onFinish }) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => {
        if (prevLine + 1 === lines.length) {
          clearInterval(interval);
          setTimeout(onFinish, 0);
          return prevLine;
        }
        return prevLine + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="introduction-container" data-testid="introduction">
      {lines.map((line, index) => (
        <p key={index} className={`introduction-text ${index === currentLine ? 'visible' : ''}`}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default Introduction;