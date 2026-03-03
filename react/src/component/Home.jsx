import React from "react";
import UseRefComponent from "./UseRefComponent";
import { Link } from "react-router-dom";
import About from "./About";

function Home(props) {
  return (
    <div>
      <div
        className="headerMenu"
        style={{
          gap: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">Abaut</Link>
      </div>
      <UseRefComponent></UseRefComponent>
    </div>
  );
}

export default Home;
