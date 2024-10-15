import React from "react";
import styles from "./Sidebar.module.css";

import CategoriesList from "../CategoriesList";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <CategoriesList />
    </aside>
  );
};

export default Sidebar;
