import React, { memo } from "react";
import cn from "classnames";

import { fetchAllMeals } from "../../api/mealApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePagination } from "../../context/PaginationContext ";

import { Category, Recipe } from "../../api/type";

import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
  category: Category;
  isActive: boolean
  setActiveCategory: (id: string) => void
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  category: {strCategory, strCategoryThumb },
  isActive,
  setActiveCategory
}) => {
  const { setCurrentPage } = usePagination(); 

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => fetchAllMeals(),
    onSuccess: (newData: Recipe[]) => {
      const filteredData = newData.filter(recipe => recipe.strCategory === strCategory)
      queryClient.setQueryData(["recipes"], filteredData);
    },
  });
  
  const selectCategory = () => {
    mutation.mutate();
    setActiveCategory(strCategory)
    setCurrentPage(1)
  };

  return (
    <li>
      <button
        className={cn(styles.card, { [styles.active]: isActive })}
        onClick={selectCategory}
      >
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className={styles.image}
        />
        <div className="">
          <h3 className={styles.title}>{strCategory}</h3>
        </div>
      </button>
    </li>
  );
};

export default memo(CategoryCard);