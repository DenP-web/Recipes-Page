import { Fragment } from "react/jsx-runtime";
import { Recipe } from "../../api/type";
import { RecipeCard } from "../../components";
import styles from "./SelectedPage.module.css";

const SelectedPage = () => {
  const favouritesString = localStorage.getItem("favourites");
  const favourites = favouritesString ? JSON.parse(favouritesString) : [];

  return (
    <section>
      <div className="container">
        {favourites.length === 0 ? (
          "Your favourite list is empty"
        ) : (
          <>
            <ul className={styles.list}>
              {favourites.map((recipe: Recipe) => (
                <RecipeCard recipe={recipe} key={recipe.idMeal} />
              ))}
            </ul>
            <div className={styles.mainInfo}>
              {favourites.map((recipe: Recipe) => (
                <div key={recipe.idMeal}>
                  <h3 className={styles.title}>{recipe.strMeal}</h3>
                  <p className={styles.text}>{recipe.strInstructions}</p>
                </div>
              ))}
            </div>

            <div className={styles.ingredients}>
              <h3>Ingredients:</h3>
              {favourites.map((recipe: Recipe) => (
                <Fragment key={recipe.idMeal}>
                  <h1 >{recipe.strMeal}</h1>
                  <ul >
                    {[...Array(20).keys()].map((i) => {
                      const ingredient =
                        recipe[`strIngredient${i + 1}` as keyof Recipe];
                      const measure =
                        recipe[`strMeasure${i + 1}` as keyof Recipe];

                      return ingredient && measure ? (
                        <li key={i}>
                          <span>- {ingredient}</span> <span>{measure}</span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </Fragment>
              ))}

              <p>
                Count of all ingredients: 
                <span>
                  {favourites.reduce((count: number, recipe: Recipe) => {
                    const ingredientCount = [...Array(20).keys()].reduce(
                      (acc, i) => {
                        const ingredient =
                          recipe[`strIngredient${i + 1}` as keyof Recipe];
                        return ingredient ? acc + 1 : acc;
                      },
                      0
                    );
                    return count + ingredientCount;
                  }, 0)}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SelectedPage;
