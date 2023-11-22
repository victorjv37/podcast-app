import { Link } from "react-router-dom";

const PodcastCards = ({ podcastArray, loaded }) => {
  const handleClick = (index) => {
    const elementFiltered = podcastArray.filter((element, i) => i === index);
    localStorage.setItem("podcastId", JSON.stringify(elementFiltered[0].id));
  };

  return (
    <div className="card">
      {loaded ? (
        <>
          <ul>
            {podcastArray.map((podcast, index) => (
              <Link key={index} to={"/podcast"}>
                <li key={index} onClick={() => handleClick(index)}>
                  <h4>{podcast.name}</h4>
                  <p>{podcast.artist}</p>
                  <img src={podcast.image} alt={podcast.name} />
                </li>
              </Link>
            ))}
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PodcastCards;
