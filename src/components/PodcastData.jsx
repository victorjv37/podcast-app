import { useEffect, useState } from "react";
import podcastList from "../services/podcastList.js";

const PodcastData = ({ id, podcastId }) => {
  const [podcastFound, setPodcastFound] = useState("");
  useEffect(() => {
    const podcast = podcastList.find((podcast) => podcast.id === id || podcast.id === podcastId);
    setPodcastFound(podcast);
  }, [id, podcastId, podcastList]);

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
            <p>{podcastFound.description.label}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastData;
