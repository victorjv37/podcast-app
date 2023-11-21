import { FilterProvider } from "../context/filterContext";
import InputFilter from "./InputFilter";

const Header = ({ setFiltered, filtered }) => {
  return (
    <div className="header">
      <h2 className="title">Podcaster</h2>
      <FilterProvider>
        <InputFilter setFiltered={setFiltered} filtered={filtered} />
      </FilterProvider>
    </div>
  );
};

export default Header;
