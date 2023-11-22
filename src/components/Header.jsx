import InputFilter from "./InputFilter";

const Header = ({ setFiltered, filtered }) => {
  return (
    <div className="header">
      <h2 className="title">Podcaster</h2>
      <InputFilter setFiltered={setFiltered} filtered={filtered} />
    </div>
  );
};

export default Header;
