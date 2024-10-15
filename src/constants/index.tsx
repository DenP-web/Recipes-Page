export const ROUTES = {
  HOME_URL: "/",
  RECIPE_URL: (id?: string) => id ? `/recipe/${id}` : '/recipe/:id',
  SELECTED_URL: "/selected",
};

export const API_URL = "https://www.themealdb.com/api/json/v1/1";
export const FLAG_API_ARL = "https://flagcdn.com";


export const COUNTRY_CODES: {[key: string]: string} = {
  Japanese: "jp",
  Croatian: "hr",
  Turkish: "tr",
  Egyptian: "eg",
  Filipino: "ph",
  Chinese: "cn",
  Tunisian: "tn",
  American: "us",
  Italian: "it",
  Canadian: "ca",
  Indian: "in",
  Dutch: "nl",
  Greek: "gr",
  British: "gb",
  French: "fr",
  Malaysian: "my",
};

export const ITEMS_PER_PAGE = 9