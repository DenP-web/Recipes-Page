import axios from 'axios';
import { API_URL } from '../constants';
import { Category, Recipe } from './type';

export const fetchAllMeals = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${API_URL}/search.php?s=`);
  return response.data.meals;
};

export const fetchMealById = async (id: string): Promise<Recipe | undefined> => {
  const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return response.data.meals ? response.data.meals[0] : undefined;
};

export const searchMeals = async (query: string): Promise<Recipe[]> => {
  const response = await axios.get(`${API_URL}/search.php?s=${query}`);
  return response.data.meals;
};


export const getAllCategories = async (): Promise<Category[]> => {
  const response = await axios.get(`${API_URL}/categories.php`);
  return response.data.categories;
};
