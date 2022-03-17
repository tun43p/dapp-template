import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeRoute from "../routes/home";
import NotFoundRoute from "../routes/not-found";

export const routes = [
  {
    index: 0,
    path: "*",
    name: "404: Page not found",
    component: <NotFoundRoute />,
  },
  {
    index: 1,
    path: "/",
    name: "Home",
    component: <HomeRoute />,
  },
];

export default function GlobalRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {routes
          .sort((a, b) => a.index - b.index)
          .map((route) => {
            return (
              <Route
                key={route.index}
                path={route.path}
                element={route.component}
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}
