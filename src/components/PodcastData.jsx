import React from "react";
import podcastList from "../services/podcastList.js";

const PodcastData = ({ id }) => {
  const podcastFound = podcastList.find((podcast) => podcast.id === id);
  return (
    <>
      {podcastFound && (
        <div className="podcastData">
          <img src={podcastFound.image}></img>
          <div className="podcastTitleDescription">
            <h4>{podcastFound.name}</h4>
            <p>by {podcastFound.artist}</p>
            <br />
            <br />
            <h4>Description:</h4>
            <p>{podcastFound.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastData;
