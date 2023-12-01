import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PodcastData = ({ id, podcastId, storagedList, description }) => {
  const [podcastFound, setPodcastFound] = useState("");

  useEffect(() => {
    const podcast = storagedList.find((podcast) => podcast.id === id || podcast.id === podcastId);
    setPodcastFound(podcast);
  }, [id, podcastId]);

  return (
    <>
      {podcastFound && (
        <div className="podcastData">
          <Link to={`/podcast/${id || podcastId}`}>
            <img src={podcastFound.image}></img>
            <h4>{podcastFound.name}</h4>
            <p>by {podcastFound.artist}</p>
            <h4 id="description">Description:</h4>
            {description && <p id={description.length < 160 ? "shorterP" : "p"}>{description}</p>}
          </Link>
        </div>
      )}
    </>
  );
};

export default PodcastData;
