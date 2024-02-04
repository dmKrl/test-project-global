import { Link } from "react-router-dom";
import s from "../../pages/backet-page/BacketPage.module.css";

const CartButtonBox = () => {
    return (
        <div className={s.cartButtonBox}>
            <button className={s.formSubmit}>Очистить корзину</button>
            <button>
                <Link className={s.formSubmit} to="/">
                    Продолжить покупки
                </Link>
            </button>
        </div>
    );
};

export default CartButtonBox;
