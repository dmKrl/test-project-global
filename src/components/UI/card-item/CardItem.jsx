import { Link } from "react-router-dom";
import s from "../../../pages/catalog-page/CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { setProductBacket } from "../../../redux/slices/backetSlice";

const CardItem = ({ card }) => {
    console.log(card);
    const { image, name, price, description } = card;
    const dispatch = useDispatch();
    function addProductCardForStore() {
        console.log(1);
        dispatch(setProductBacket(card));
    }
    return (
        <div className={s.productCard}>
            <img src={image} alt="" className={s.productImg} />
            <button className={s.productBag} onClick={addProductCardForStore}>
                <img src="/image/shopping-bag.svg" alt="" />
            </button>
            <Link to="/" className={s.productName}>
                {name}
            </Link>
            <p className={s.productText}>{description}</p>
            <p className={s.productPrice}>{price}</p>
        </div>
    );
};

export default CardItem;
