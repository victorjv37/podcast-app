import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PodcastView from "./views/PodcastView.jsx";
import EpisodeView from "./views/EpisodeView.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/podcast/:id" element={<PodcastView />} />
        <Route path="/podcast/:id/episode/:episodeId" element={<EpisodeView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
