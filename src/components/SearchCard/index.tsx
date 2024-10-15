import React from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from '../../api/type'
import styles from './SearchCard.module.css'
import { ROUTES } from '../../constants'

type SearchCardProps = {
  recipe: Recipe
}

const SearchCard: React.FC<SearchCardProps> = ({recipe}) => {
  return (
    <li className={styles.item}>
      <Link className={styles.card} to={ROUTES.RECIPE_URL(recipe.idMeal)}>
        <img className={styles.image} src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p className={styles.title}>{recipe.strMeal}</p>
      </Link>
    </li>
  )
}

export default SearchCard
