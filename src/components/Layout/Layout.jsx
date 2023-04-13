import React from "react";
import Header from "../Header/Header";
import MainCotainer from "../MainContainer/MainCotainer";
import "./Layout.css";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="main">
      <Header />
      <MainCotainer />
      <Footer />
    </div>
  );
};

export default Layout;
