import { useDispatch, useSelector } from "react-redux";
import s from "../../pages/main-page/MainPage.module.css";
import {
    selectIsShowingPopup,
    setIsShowingPopup,
} from "../../redux/slices/popupSlice";

const Popup = () => {
    const isShowingPopup = useSelector(selectIsShowingPopup);
    console.log(isShowingPopup);
    const dispatch = useDispatch();
    function changeIsShowing() {
        dispatch(setIsShowingPopup());
    }
    return (
        <div
            className={
                isShowingPopup ? `${s.popup} ${s.popupActive}` : `${s.popup}`
            }
        >
            <div
                className={s.popupContent}
                onClick={(e) => e.stopPropagation()}
            >
                <p>Ваш заказ оформлен!</p>
                <button
                    className={s.popupButton}
                    onClick={() => changeIsShowing()}
                >
                    Продолжить покупки
                </button>
            </div>
        </div>
    );
};

export default Popup;
