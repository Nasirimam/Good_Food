import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/:name' element={<Product />} />
        </Routes>
    )
}
export default AllRoutes