import { Route, Routes } from "react-router-dom";
import MoviesListContainer from "containers/MoviesListContainer/MoviesListContainer";
import MovieInfoContainer from "containers/MovieInfoContainer/MovieInfoContainer";

import { routes } from "./routes";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MovieInfoContainer />} path={routes.Review} />
      <Route element={<MoviesListContainer />} path={routes.Index} />
      <Route element={<MoviesListContainer />} path={routes.Reviews} />
    </Routes>
  );
};

export default MainRouter;
