import InputFilters from "./InputFilters";

const Header = ({setFiltered}) => {

  return (
    <div>
      <h2>podcastApp</h2>
      <InputFilters setFiltered={setFiltered} />   
    </div>
  );
};

export default Header;
