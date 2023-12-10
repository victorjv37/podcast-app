import React from "react";

const PodcastEpisodeCounter = ({ episodeCounter }) => {
  return (
    <h4 className="card p-1 episodesCounter" style={{ borderRadius: "2px" }}>
      <strong>Episodes: {episodeCounter - 1}</strong>
    </h4>
  );
};

export default PodcastEpisodeCounter;
