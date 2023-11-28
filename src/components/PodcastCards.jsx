import { Link } from "react-router-dom";

const PodcastCards = ({ allPodcasts, isLoaded }) => {
  return (
    <div>
      {isLoaded ? (
        <>
          <ul>
            {allPodcasts.map((podcast, index) => (
              <Link className="card" key={index} to={`/podcast/${podcast.id}`}>
                <li key={index}>
                  <img src={podcast.image} alt={podcast.name} />
                  <h4>{podcast.name}</h4>
                  <p>Author: {podcast.artist}</p>
                </li>
              </Link>
            ))}
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PodcastCards;
