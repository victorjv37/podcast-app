import { useEffect, useState } from "react";

const PodcastEpisodes = ({ episodesList }) => {
  const [ordenatedEpList, setOrdenatedEpList] = useState(null);

  useEffect(() => {
    if (episodesList) {
      const ordenedList = episodesList.slice(1, episodesList.length).reverse();
      setOrdenatedEpList(ordenedList);
    }
  }, [episodesList]);

  return (
    <>
      {ordenatedEpList && (
        <ul>
          {ordenatedEpList.map((episode, index) => (
            <li key={index}>
              <p>{episode.title}</p>
              <p>{episode.releaseDate}</p>
              <p>{episode.duration}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PodcastEpisodes;
