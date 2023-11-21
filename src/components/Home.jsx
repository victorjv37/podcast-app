import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import podcastList from "../services/podcastList";

const Home = () => {
  const [podcastArray, setPodcastArray] = useState([]);
  const [loaded, setLoaded] = useState(false);

  let storagedList = localStorage.getItem("podcastList");

  useEffect(() => {
    (async () => {
      if (storagedList) {
        setPodcastArray(JSON.parse(storagedList));
        setLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setPodcastArray(podcastList);
          setLoaded(true);
        } catch (error) {
          console.log("Error bringing data to the component", error);
        }
      }
    })();
  }, [storagedList]);

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

export default Home;
