import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MeetTheBand from "./MeettheBand/MeetTheBand";
import Concerts from "./Concerts/Concerts";
import Media from "./Media/Media";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/meet-the-band" element={<MeetTheBand />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
}
