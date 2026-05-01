import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Copos } from "./pages/Copos";
import { Garrafas } from "./pages/Garrafas";
import { Brindes } from "./pages/Brindes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/copos",
    Component: Copos,
  },
  {
    path: "/garrafas",
    Component: Garrafas,
  },
  {
    path: "/brindes",
    Component: Brindes,
  }
]);
