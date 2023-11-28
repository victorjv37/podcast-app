import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="title">Podcaster</div>
      </Link>
    </>
  );
};

export default Title;
