import React from "react";
import classNames from "classnames";
import "./Hamburger.css";

const Hamburger = ({ isActive, onClick }) => {
  return (
    <div
      className={classNames("hamburger", {
        active: isActive,
      })}
      onClick={onClick}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
