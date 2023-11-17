import { useState, useEffect } from "react";
import podcastList from "../../public/podcastList";

const PodcastCard = () => {
  const [podcastArray, setPodcastArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let storagedList = localStorage.getItem('podcastList')
  
  useEffect(() => {
    const fetchData = async () => {
      if (storagedList){
        setPodcastArray(JSON.parse(storagedList))
        setLoaded(true)
      }else{
        try {
          await new Promise(resolve =>  setTimeout(resolve,500));
          setPodcastArray(podcastList)
          setLoaded(true)
        }catch(error){
          console.log('Error bringing data to the component', error)
        }
      }
      }
    fetchData()
  },[])
  
  return (
    loaded ? (
    <div>
      <ul>
        {podcastArray.map((podcast, index) => (
            <li key={index}>
              <h4>{podcast.name}</h4>
              <p>{podcast.artist}</p>
              <img src={podcast.image}></img>
            </li>
        ))}
      </ul>
    </div>
    ) : (
        <div>Loading...</div>
    )
  );
};

export default PodcastCard;