import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import BasketPage from "./pages/basket-page/BasketPage";
import CatalogPage from "./pages/catalog-page/CatalogPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path="/">
                <Route element={<CatalogPage />} path="/" />
                <Route element={<BasketPage />} path="/basket-page" />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
