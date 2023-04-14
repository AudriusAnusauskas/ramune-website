import React, { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Sidebar from "../Sidebar/Sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../../img/RBLfinal.png";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: "(max-width: 640px)" });

  useEffect(() => {
    if (matches) {
      setIsSidebarVisible(false);
    }
  }, [matches]);

  const handleHamburgerClick = () => {
    setIsSidebarVisible((isSidebarVisible) => !isSidebarVisible);
  };

  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo" />
      <>
        {matches ? (
          <Hamburger
            isActive={isSidebarVisible}
            onClick={handleHamburgerClick}
          />
        ) : (
          <Navigation />
        )}
        {isSidebarVisible && (
          <Sidebar>
            <Navigation />
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;
