import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchAllMeals } from "../../api/mealApi";

import RecipeCard from "../RecipeCard";
import Search from "../Search";
import Loader from "../ui/Loader";
import Pagination from "../Pagination";

import { Recipe } from "../../api/type";

import { usePagination } from "../../context/PaginationContext ";

import { ITEMS_PER_PAGE } from "../../constants";

import styles from "./RecipesList.module.css";

const RecipesList: React.FC = () => {
  const { currentPage, setCurrentPage } = usePagination(); 

  const { data = [], isLoading } = useQuery<Recipe[]>({
    queryKey: ["recipes"],
    queryFn: () => fetchAllMeals(),
    staleTime: Infinity,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (isLoading) return <Loader />;

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const currentItems = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.title}>Recipes</h3>
        <Search />
      </div>
      <ul className={styles.list}>
        {currentItems.map((recipe: Recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RecipesList;
