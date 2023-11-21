import { PodcastListProvider } from "../context/filterContext";
import InputFilter from "./InputFilter";

const Header = ({ setFiltered, filtered }) => {
  return (
    <div className="header">
      <h2 className="title">Podcaster</h2>
      <PodcastListProvider>
        <InputFilter setFiltered={setFiltered} filtered={filtered} />
      </PodcastListProvider>
    </div>
  );
};

export default Header;
