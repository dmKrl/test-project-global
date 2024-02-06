import { Link } from "react-router-dom";
import s from "../../../pages/catalog-page/CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { setProductBasket } from "../../../redux/slices/basketSlice";
import imageBag from "../../../image/shopping-bag.svg";

const CardItem = ({ card }) => {
    const { image, name, price, description, SalePrice } = card;
    const dispatch = useDispatch();

    function addProductCardForStore() {
        dispatch(setProductBasket(card));
    }

    return (
        <div className={s.productCard}>
            <img src={image} alt="" className={s.productImg} />
            <button className={s.productBag} onClick={addProductCardForStore}>
                <img src={imageBag} alt="" />
            </button>
            <Link to="/" className={s.productName}>
                {name}
            </Link>
            <p className={s.productText}>{description}</p>
            <div className={s.productBox}>
                <p className={s.productPrice}>{price}</p>
                <p className={s.productPriceSale}>{SalePrice}</p>
            </div>
        </div>
    );
};

export default CardItem;
