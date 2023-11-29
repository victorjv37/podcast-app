import { useEffect, useState } from "react";

const PodcastData = ({ id, podcastId, storagedList }) => {
  const [podcastFound, setPodcastFound] = useState("");

  useEffect(() => {
    const podcast = storagedList.find((podcast) => podcast.id === id || podcast.id === podcastId);
    setPodcastFound(podcast);
  }, [id, podcastId]);

  return (
    <>
      {podcastFound && (
        <div className="podcastData">
          <img src={podcastFound.image}></img>
          <h4>{podcastFound.name}</h4>
          <p>by {podcastFound.artist}</p>
          <h4 id="description">Description:</h4>
          <p id={podcastFound.description.label.length < 160 ? "shorterP" : "p"}>
            {podcastFound.description.label}
          </p>
        </div>
      )}
    </>
  );
};

export default PodcastData;
