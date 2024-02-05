import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import s from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsShowingPopup,
    setIsShowingPopup,
} from "../../redux/slices/PopupSlice";

const MainPage = () => {
    const isShowingPopup = useSelector(selectIsShowingPopup);
    console.log(isShowingPopup);
    const dispatch = useDispatch();
    function changeIsShowing() {
        dispatch(setIsShowingPopup());
    }
    return (
        <div className={s.main}>
            <div
                className={
                    isShowingPopup
                        ? `${s.popup} ${s.popupActive}`
                        : `${s.popup}`
                }
            >
                <div
                    className={s.popupContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <p>Ваш заказ оформлен!</p>
                    <button className={s.popupButton} onClick={() => changeIsShowing()}>
                        Продолжить покупки
                    </button>
                </div>
            </div>
            <div className={s.container}>
                <Header />

                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
