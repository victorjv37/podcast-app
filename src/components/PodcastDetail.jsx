import { useEffect, useState } from "react";
import podcastDetail from '../../public/podcastDetail.js'

const PodcastDetail = () => {

  const [podcastDetailList, setPodcastDetailList] = useState(null)
  const [loaded, setLoaded] =  useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      if (podcastDetailList) {
        setPodcastDetailList(JSON.parse(podcastDetail));
        setLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setPodcastDetailList(podcastDetail);
          setLoaded(true);
        } catch (error) {
          console.log("Error bringing data to the component", error);
        }
      }
    };
    fetchData();
  }, []);
  
    
  

  return (
    <>
    {loaded ? <div>Cargado???</div> : <div>nooo.....</div>
    }
    </>
  )
}

export default PodcastDetail