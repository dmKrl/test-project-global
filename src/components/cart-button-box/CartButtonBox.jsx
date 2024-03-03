import { Link } from "react-router-dom";
import s from "../../pages/basket-page/BasketPage.module.css";
import { useDispatch } from "react-redux";
import { clearAllProductBasket } from "../../redux/slices/basketSlice";

const CartButtonBox = () => {
    const dispatch = useDispatch();

    function deleteAllCards() {
        dispatch(clearAllProductBasket());
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
