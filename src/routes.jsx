import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import BacketPage from "./pages/backet-page/BacketPage";
import CatalogPage from "./pages/catalog-page/CatalogPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path="/">
                <Route element={<CatalogPage />} path="/" />
                <Route element={<BacketPage />} path="/backet-page" />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
