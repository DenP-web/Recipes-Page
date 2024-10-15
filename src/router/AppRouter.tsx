import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../constants";
import HomePage from "../pages/HomePage";
import RecipePage from "../pages/RecipePage";
import RootPage from "../pages/RootPage";
import SelectedPage from "../pages/SelectedPage";

export const routes = [
  {
    path: ROUTES.HOME_URL,
    element: <RootPage />,
    children: [
      {
        path: ROUTES.HOME_URL,
        element: <HomePage />,
      },
      {
        path: ROUTES.RECIPE_URL(),
        element: <RecipePage />,
      },
      {
        path: ROUTES.SELECTED_URL,
        element: <SelectedPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;
