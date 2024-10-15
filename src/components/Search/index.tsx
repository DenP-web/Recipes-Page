import React, { useState, useEffect, memo } from "react";
import styles from "./SearchInput.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchMeals } from "../../api/mealApi";
import Loader from "../ui/Loader";
import cn from "classnames";
import SearchCard from "../SearchCard";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Поточний запит
  const [debouncedQuery, setDebouncedQuery] = useState<string>(""); // Дебаунс-значення

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClearClick = () => {
    setQuery("");
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const { data = [], isLoading } = useQuery({
    queryFn: () => searchMeals(debouncedQuery),
    queryKey: ["search", debouncedQuery],
    enabled: !!debouncedQuery,
  });

  return (
    <div className={styles.searchBox}>
      <div className={styles.wrapper}>
        <input
          id="search"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search recipe..."
          className={styles.input}
        />
        <button
          className={cn(styles.clear, { [styles.active]: query.length > 0 })}
          onClick={handleClearClick}
        >
          &times;
        </button>
      </div>
      <div className={cn(styles.popup, { [styles.active]: query.length > 2 })}>
        <ul>
          {isLoading ? (
            <Loader />
          ) : data === null || !data.length ? (
            <span className={styles.notFound}>"Nothing found"</span>
          ) : (
            data.map((recipe) => <SearchCard key={recipe.idMeal} recipe={recipe} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(Search);
