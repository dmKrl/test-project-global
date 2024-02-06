import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import s from "./MainPage.module.css";
import Popup from "../../components/popup/Popup";

const MainPage = () => {
    return (
        <div className={s.main}>
            <Popup />
            <div className={s.container}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
