import { Link } from "react-router-dom";
import s from "../../pages/backet-page/BacketPage.module.css";
import { useDispatch } from "react-redux";
import { clearAllProductBacket } from "../../redux/slices/backetSlice";

const CartButtonBox = () => {
    const dispatch = useDispatch();
    function deleteAllCards() {
        dispatch(clearAllProductBacket());
    }
    return (
        <div className={s.cartButtonBox}>
            <button className={s.formSubmit} onClick={deleteAllCards}>
                Очистить корзину
            </button>
            <button>
                <Link className={s.formSubmit} to="/">
                    Продолжить покупки
                </Link>
            </button>
        </div>
    );
};

export default CartButtonBox;
