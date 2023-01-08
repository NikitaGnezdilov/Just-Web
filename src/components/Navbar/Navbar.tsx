import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthConext";
import { auth } from "../../firebase";
import "./Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  const currentUser = useContext(AuthContext);

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
      
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  );
};

export default Navbar;
