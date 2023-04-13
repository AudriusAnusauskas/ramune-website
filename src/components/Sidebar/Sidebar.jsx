import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.takeOver}>{children}</div>
    </div>
  );
};

export default Sidebar;
