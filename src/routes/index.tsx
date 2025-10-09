import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home";
import PoliticaPage from "../pages/Politica";
import NotFoundPage from "../pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/politica", element: <PoliticaPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
