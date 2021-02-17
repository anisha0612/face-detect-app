import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br-100"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            style={{ height: "100px", width: "100px", padding: "20px" }}
            src={brain}
            alt="brain logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
