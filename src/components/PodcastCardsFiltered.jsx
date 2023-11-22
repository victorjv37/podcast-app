import { Link } from "react-router-dom";
import { useEffect } from "react";
import podcastList from "../services/podcastList";

const PodcastCardsFiltered = ({
  podcastListFiltered,
  setPodcastListFiltered,
  error,
  setError,
  filterText,
  filtered
}) => {
  useEffect(() => {
    const podcastFilteredArray = podcastList.filter((element) => {
      let elementName = element.name;
      let authorName = element.artist;

      if (filterText) {
        if (
          elementName.toLowerCase().includes(filterText.toLowerCase()) ||
          authorName.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return element;
        }
      }
    });
    setPodcastListFiltered(podcastFilteredArray);
  }, [filterText]);

  useEffect(() => {
    if (filtered) {
      if (podcastListFiltered.length === 0) {
        setError(true);
      } else if (podcastListFiltered.length !== 0) {
        setError(false);
      }
    }
  }, [filterText, podcastListFiltered]);

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
