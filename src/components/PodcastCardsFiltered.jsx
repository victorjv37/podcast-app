import { useState, useMemo, useEffect } from "react";
import { useFilter } from "../context/filterContext";
import { Link } from "react-router-dom";
import InputFilter from "./InputFilter";
import podcastList from "../services/podcastList";

const PodcastCardsFiltered = () => {
  const { filterText } = useFilter();
  const [visible, setVisible] = useState(false);
  const [podcastListFiltered, setPodcastListFiltered] = useState([]);

  // const handleClick = (index) => {
  //   const elementFiltered = podcastListFiltered.filter((element, i) => i === index);
  //   localStorage.setItem("podcastId", JSON.stringify(elementFiltered[0].id));
  // };

  console.log(filterText);

  useEffect(() => {
    const podcastListFiltered = podcastList.filter((element) => {
      let elementName = element.name;
      let authorName = element.artist;

      console.log(filterText);
      if (filterText) {
        if (
          elementName.toLowerCase().includes(filterText.toLowerCase()) ||
          authorName.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return element;
        }
      }
    });
    setPodcastListFiltered(podcastListFiltered);
  }, [filterText]);

  return (
    <>
      <div className={podcastListFiltered ? "card" : "hide"}>
        <ul>
          {podcastListFiltered &&
            podcastListFiltered.map((podcast, index) => (
              <Link key={index} to={"/podcast"}>
                <li key={index} onClick={() => handleClick(index)}>
                  <h4>{podcast.name}</h4>
                  <p>{podcast.artist}</p>
                  <img src={podcast.image} alt={podcast.name} />
                </li>
              </Link>
            ))}
        </ul>
      </div>
      {visible && <InputFilter podcastListFiltered={podcastListFiltered} />}
    </>
  );
};

export default PodcastCardsFiltered;
