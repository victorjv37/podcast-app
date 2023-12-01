import { Link } from "react-router-dom";

const PodcastCardsFiltered = ({ filteredPodcasts }) => {
  return (
    <>
      <ul>
        {filteredPodcasts &&
          filteredPodcasts.map((podcast, index) => (
            <li key={index}>
              <Link
                className={filteredPodcasts.length === 1 ? "onlychild" : "card"}
                key={index}
                to={`/podcast/${podcast.id}`}
              >
                <img src={podcast.image} alt={podcast.name} />
                <h4>{podcast.name}</h4>
                <p>{podcast.artist}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PodcastCardsFiltered;
