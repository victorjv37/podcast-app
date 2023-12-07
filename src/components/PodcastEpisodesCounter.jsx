import React from "react";

const PodcastEpisodeCounter = ({ episodeCounter }) => {
  return (
    <h4 className="card p-1" style={{ fontSize: "1.25rem", borderRadius: "2px" }}>
      <strong>Episodes: {episodeCounter - 1}</strong>
    </h4>
  );
};

export default PodcastEpisodeCounter;
