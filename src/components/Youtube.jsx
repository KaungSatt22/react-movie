import React from "react";

const Youtube = ({ videoId, title, autoPlay = false }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=1" : ""
  }`;

  return (
    <iframe
      title={title}
      width="100%"
      className="h-[60vh] relative"
      src={videoURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default Youtube;
