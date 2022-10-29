import { Outlet, Route, Routes } from "react-router-dom"
import { Stores } from "../Stores/Stores"
import { Products } from "../Products/Product.js"
import { ProductForm } from "../Products/ProductForm.js"



export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Sweets galore!</div>

                    <Outlet />
                </>
            }>
                <Route path="Stores" element={ <Stores /> } />
                <Route path="Products" element={ <Products /> } />
                <Route path="Products/create" element={ <ProductForm /> } />
            </Route>
        </Routes>
    )
}

