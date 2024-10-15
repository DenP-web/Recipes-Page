import React, { useState } from "react";
import { getAllCategories } from "../../api/mealApi";
import { useQuery } from "@tanstack/react-query";

import Loader from "../ui/Loader";
import CategoryCard from "../CategoryCard";

import styles from "./CategoriesList.module.css";
import ClearFilterBtn from "../ClearFilterBtn";

const CategoriesList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { data = [], isLoading } = useQuery({
    queryFn: () => getAllCategories(),
    queryKey: ["allCategories"],
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>Categories</h3>
        {activeCategory && (
          <ClearFilterBtn clearActiveCategory={() => setActiveCategory(null)} />
        )}
      </div>
      <ul className={styles.list}>
        {data.map((category) => (
          <CategoryCard
            key={category.idCategory}
            category={category}
            isActive={activeCategory === category.strCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </ul>
    </>
  );
};

export default CategoriesList;
