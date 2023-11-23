import { Link } from "react-router-dom";

const PodcastCards = ({ allPodcasts, isLoaded }) => {
  const handleClick = (index) => {
    const elementFiltered = allPodcasts.filter((element, i) => i === index);
    localStorage.setItem("podcastId", JSON.stringify(elementFiltered[0].id));
  };

  return (
    <div>
      {isLoaded ? (
        <>
          <ul>
            {allPodcasts.map((podcast, index) => (
              <Link className="card" key={index} to={"/podcast"}>
                <li key={index} onClick={() => handleClick(index)}>
                  <img src={podcast.image} alt={podcast.name} />
                  <h4>{podcast.name}</h4>
                  <p>Author:{podcast.artist}</p>
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
