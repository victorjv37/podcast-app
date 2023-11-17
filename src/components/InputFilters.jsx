import { useState, useMemo } from "react";
import podcastList from "../../public/podcastList";
import PodcastCardsFiltered from "./PodcastCardsFiltered";

const InputFilters = ({setFiltered}) => {
  const [filteredNameText, setFilterNameText] = useState("");
  const [filteredAuthorText, setFilterAuthorText] = useState("");
  
  const handleOnPodcastNameChange = (event) => {
    setFiltered(true)
    setFilterNameText(event.target.value);
  };

  const handleOnAuthorNameChange = (event) => {
    setFiltered(true)
    setFilterAuthorText(event.target.value);
  };

  const podcastListFiltered = useMemo(() => {
    return podcastList.filter((element) => {
      let elementName = element.name;
      let authorName = element.artist;
      const nameChar = elementName.toLowerCase().slice(0, filteredNameText.length);
      const authorChar = authorName.toLowerCase().slice(0, filteredAuthorText.length);
      return authorChar === filteredAuthorText.toLowerCase() && nameChar === filteredNameText.toLowerCase() ;
    });
  }, [filteredNameText, filteredAuthorText]);

  return (
      <>
      <input type='text' placeholder="Search by author name" onChange={handleOnAuthorNameChange} />
      <input type='text' placeholder="Search by podcast name" onChange={handleOnPodcastNameChange} />
      {podcastListFiltered.length > 0 && <PodcastCardsFiltered podcastListFiltered={podcastListFiltered} />}
    </>
  );
};

export default InputFilters;