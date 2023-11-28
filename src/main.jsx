import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PodcastDetail from "./components/PodcastDetail.jsx";
import Episode from "./components/Episode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/podcast" element={<PodcastDetail />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
        <Route path="/podcast/:id/episode/:episodeId" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
