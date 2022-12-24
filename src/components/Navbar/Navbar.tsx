import React from "react";
import "./Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navbar__moon">
        <div className="navbar__hamb">
          <span></span>
        </div>
      </div>
      <div className="navbar__open-moon">
        <div className="navbar__settings"></div>
        <div className="navbar__mail"></div>
        <div className="navbar__profile"></div>
      </div>
    </div>
  );
};

export default Navbar;
