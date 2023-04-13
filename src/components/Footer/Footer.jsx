import React from "react";

import "./Footer.css";

const Footer = ({ ...props }) => {
  return (
    <footer className="footer" {...props}>
      © All rights reserved.
    </footer>
  );
};

export default Footer;
