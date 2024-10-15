import styles from "./Recipe.module.css";

import { Recipe } from "../../api/type";
import InfoItem from "../../components/ui/InfoItem";
import Button from "../../components/ui/Button";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../../api/mealApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/ui/Loader";

const RecipePage = () => {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading } = useQuery({
    queryKey: ["resipe"],
    queryFn: () => fetchMealById(id),
    staleTime: 0,
  });

  const meal = data as Recipe;

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <h1>The recipe is not found</h1>;
  }
  

  const addToFavourite = () => {
    const favouritesString = localStorage.getItem("favourites");
    const favourites = favouritesString ? JSON.parse(favouritesString) : [];
    const isAdded = favourites.find(
      (recive: Recipe) => recive.idMeal === data?.idMeal
    );

    if (isAdded === undefined) {
      favourites.push(meal);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div>
          <h2 className={styles.title}>{meal.strMeal}</h2>
          <div className={styles.info}>
            <InfoItem label="Category" value={meal.strCategory} />
            <InfoItem label="Area" value={meal.strArea} />
            <InfoItem label="Tags" value={meal.strTags} />
            <InfoItem label="Drink Alternate" value={meal.strDrinkAlternate} />
            <InfoItem
              label="Creative Commons Confirmed"
              value={meal.strCreativeCommonsConfirmed}
            />
            <InfoItem label="Instructions" value={meal.strInstructions} />
          </div>

          <div className={styles.buttons}>
            <Button text="Watch on YouTube" value={meal.strYoutube} />
            <Button text="View Source" value={meal.strSource} />
            <button
              className={styles.button}
              type="button"
              onClick={addToFavourite}
            >
              Add to favourite
            </button>
          </div>

          <h3 className={styles.subtitle}>Ingredients/Measure:</h3>
          <ul className={styles.ingredients}>
            {[...Array(20).keys()].map((i) => {
              const ingredient = meal[`strIngredient${i + 1}` as keyof Recipe];
              const measure = meal[`strMeasure${i + 1}` as keyof Recipe];

              return ingredient && measure ? (
                <li key={i}>
                  <span>-{ingredient}</span> <span>{measure}</span>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
