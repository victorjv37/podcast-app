import ListCounter from "./ListCounter";
import PodcastCardsFiltered from "./PodcastCardsFiltered";

const InputFilter = ({ setFiltered, filtered, setFilterText }) => {
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setFiltered(true);
    if (event.target.value === "") {
      setFiltered(false);
    }
  };

  return (
    <>
      <input type="text" placeholder="Search podcast" onChange={handleFilterChange} />
      <ListCounter filtered={filtered} />
    </>
  );
};

export default InputFilter;
