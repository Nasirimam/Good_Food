import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/:name"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
export default AllRoutes;
