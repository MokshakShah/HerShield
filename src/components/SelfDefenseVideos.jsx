import React from 'react';

function SelfDefenseVideos() {
  const videoLinks = [
    "process.env.SENSITIVE_VALUE_1", // Example - Replace with real links
    "process.env.SENSITIVE_VALUE_2",
  ];

  return (
    <div>
      <h3>Self-Defense Video Lectures:</h3>
      <ul>
        {videoLinks.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Video {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelfDefenseVideos;
