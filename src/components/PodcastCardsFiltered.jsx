import { Link } from "react-router-dom";

const PodcastCardsFiltered = ({ podcastListFiltered, error }) => {
  return (
    <>
      <div className={error === true ? "hide" : "card"}>
        <ul>
          {podcastListFiltered &&
            podcastListFiltered.map((podcast, index) => (
              <Link key={index} to={"/podcast"}>
                <li key={index}>
                  <h4>{podcast.name}</h4>
                  <p>{podcast.artist}</p>
                  <img src={podcast.image} alt={podcast.name} />
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default PodcastCardsFiltered;
