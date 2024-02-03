import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import s from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
