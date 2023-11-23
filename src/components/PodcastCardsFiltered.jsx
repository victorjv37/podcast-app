import { Link } from "react-router-dom";

const PodcastCardsFiltered = ({ filteredPodcasts }) => {
  return (
    <>
      <ul>
        {filteredPodcasts &&
          filteredPodcasts.map((podcast, index) => (
            <Link
              className={filteredPodcasts.length === 1 ? "onlychild" : "card"}
              key={index}
              to={"/podcast"}
            >
              <li key={index}>
                <img src={podcast.image} alt={podcast.name} />
                <h4>{podcast.name}</h4>
                <p>{podcast.artist}</p>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default PodcastCardsFiltered;
