import { useState } from "react";
import { Link } from "react-router-dom";


const PodcastCardsFiltered = ({ podcastListFiltered }) => {

  const handleClick = (index) => {
    const elementFiltered = podcastListFiltered.filter((element, i) => i === index);
    localStorage.setItem("podcastId", JSON.stringify(elementFiltered[0].id));
  };

  return (
    <div>
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
  );
};

export default PodcastCardsFiltered;
