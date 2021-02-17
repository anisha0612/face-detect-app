import React from "react";

const Navigation = ({ onRouteChange, isSigned }) => {
  if (isSigned) {
    return (
      <nav className="flex justify-end">
        <p
          className="f4 fw4 db black link dim pa3 pointer underline"
          onClick={() => onRouteChange("signout")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end">
        <p
          className="f4 fw4 db black link dim pa3 pointer underline"
          onClick={() => onRouteChange("signin")}
        >
          Sign In
        </p>
        <p
          className="f4 fw4 db black link dim pa3 pointer underline"
          onClick={() => onRouteChange("register")}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
