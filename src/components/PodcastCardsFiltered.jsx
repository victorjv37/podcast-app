import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import podcastList from "../services/podcastList";
import InputFilter from "./InputFilter";

const PodcastCardsFiltered = () => {
  const [error, setError] = useState(null);
  const [podcastListFiltered, setPodcastListFiltered] = useState("");
  const [visible, setVisible] = useState(false);
  const [filterText, setFilterText] = useState("");

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
    if (podcastListFiltered) {
      if (filterText && podcastListFiltered.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [filterText]);

  return (
    <>
      <div className={podcastListFiltered ? "card" : "hide"}>
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
      {visible && <InputFilter setFilterText={setFilterText} />}
    </>
  );
};

export default PodcastCardsFiltered;
