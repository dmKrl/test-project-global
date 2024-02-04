import { Link } from "react-router-dom";
import s from "../../../pages/catalog-page/CatalogPage.module.css";

const CardItem = ({ card }) => {
    console.log(card);
    const { image, name, price, description } = card;
    return (
        <div className={s.productCard}>
            <img src={image} alt="" className={s.productImg} />
            <button className={s.productBag}>
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
