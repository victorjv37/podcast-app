import ListCounter from "./ListCounter";

const InputFilter = ({ setFiltered, setFilterText }) => {
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    if (event.target.value === "") {
      setFiltered(false);
    } else {
      setFiltered(true);
    }
  };

  return (
    <>
      <input type="text" placeholder="Search podcast" onChange={handleFilterChange} />
    </>
  );
};

export default InputFilter;
