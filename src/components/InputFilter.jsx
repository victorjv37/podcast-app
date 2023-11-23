const InputFilter = ({ setIsFiltered, setFilterText }) => {
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    if (event.target.value === "") {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  };

  return (
    <>
      <input type="text" placeholder="Filter podcasts..." onChange={handleFilterChange} />
    </>
  );
};

export default InputFilter;
