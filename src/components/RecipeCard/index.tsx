import React, { memo } from "react";
import { Recipe } from "../../api/type";
import styles from "./RecipeCard.module.css";
import { COUNTRY_CODES, FLAG_API_ARL, ROUTES } from "../../constants";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <li key={recipe.idMeal}>
      <Link to={ROUTES.RECIPE_URL(recipe.idMeal)}>
        <article className={styles.card}>
          <img
            className={styles.mainImage}
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <h2 className={styles.title}>{recipe.strMeal}</h2>
          <p className={styles.category}>Category: {recipe.strCategory}</p>
          <div className={styles.country}>
            <span>Country:</span>
            <img
              className={styles.flag}
              src={`${FLAG_API_ARL}/16x12/${COUNTRY_CODES[recipe.strArea]}.png`}
            />
          </div>
        </article>
      </Link>
    </li>
  );
};

export default memo(RecipeCard);
