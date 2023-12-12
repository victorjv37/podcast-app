import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="titleContainer">
      <Link to={"/"}>
        <div className="title">Podcaster</div>
      </Link>
    </div>
  );
};

export default Title;
