import React from "react";
import cn from "classnames";

import { RecipesList, Sidebar } from "../../components";
import { PaginationProvider } from "../../context/PaginationContext ";

import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <section className={styles.recipe}>
      <div className={cn("container", styles.grid)}>
        <PaginationProvider>
          <Sidebar />
          <RecipesList />
        </PaginationProvider>
      </div>
    </section>
  );
};

export default HomePage;
