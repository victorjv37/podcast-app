import "./App.scss";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home";
import PodcastCardsFiltered from "./components/PodcastCardsFiltered";
import { PodcastListProvider } from "./context/filterContext";

const App = () => {
  const [filtered, setFiltered] = useState(false);

  return (
    <>
      <PodcastListProvider>
        <Header setFiltered={setFiltered} filtered={filtered} />
        <div className={filtered ? "filtered-card home-container" : "home-container"}>
          {filtered ? <PodcastCardsFiltered filtered={filtered} /> : <Home />}
        </div>
      </PodcastListProvider>
    </>
  );
};

export default App;
