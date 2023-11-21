import { useState } from "react";
import { usePodcastListContext } from "../context/filterContext";
import { Link } from "react-router-dom";
import InputFilter from "./InputFilter";

const PodcastCardsFiltered = () => {
  const { podcastListFiltered } = usePodcastListContext();
  const [visible, setVisible] = useState(false);

  // const handleClick = (index) => {
  //   const elementFiltered = podcastListFiltered.filter((element, i) => i === index);
  //   localStorage.setItem("podcastId", JSON.stringify(elementFiltered[0].id));
  // };

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
