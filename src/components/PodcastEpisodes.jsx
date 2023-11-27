import { useEffect, useState } from "react";

const PodcastEpisodes = ({ episodesList, isLoaded }) => {
  const [ordenatedEpList, setOrdenatedEpList] = useState(null);

  useEffect(() => {
    if (episodesList) {
      const ordenedList = episodesList.slice(1, episodesList.length).reverse();
      setOrdenatedEpList(ordenedList);
    }
  }, [episodesList]);

  return (
    <>
      {isLoaded ? (
        ordenatedEpList && (
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {ordenatedEpList.map((episode, index) => (
                  <tr key={index}>
                    <td>{episode.title}</td>
                    <td>{episode.releaseDate}</td>
                    <td>{episode.duration}</td>
                  </tr>
                ))}
              </tbody>
               
            </table>
          </div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PodcastEpisodes;
