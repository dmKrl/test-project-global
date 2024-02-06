import { useDispatch } from "react-redux";
import s from "../../../pages/basket-page/BasketPage.module.css";
import {
    changePriceWithDeleteChoseCard,
    deleteChoseProduct,
    setFullPrice,
} from "../../../redux/slices/basketSlice";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const CardItemBasket = ({ card }) => {
    const priceForStore = card.price.split(" ").join("");
    const dispatch = useDispatch();
    const prevRef = useRef();
    const [productValue, setProductValue] = useState(1);
    const [prevProductValue, setPrevProductValue] = useState(1);

    function changeValueProduct(event) {
        setProductValue((prev) => {
            setPrevProductValue(prev);
            return Number(event.target.value);
        });
    }

    function deleteChoseCard() {
        dispatch(deleteChoseProduct(card.name));
        dispatch(
            changePriceWithDeleteChoseCard(
                parseInt(priceForStore) * productValue
            )
        );
    }
    useEffect(() => {
        prevRef.current = productValue;
        prevProductValue <= productValue
            ? dispatch(setFullPrice(parseInt(priceForStore)))
            : dispatch(setFullPrice(parseInt(priceForStore) * -1));
    }, [productValue, priceForStore, prevProductValue, dispatch]);

    return (
        <div className={s.cartItem}>
            <div className={s.CardLeftBlock}>
                <div className={s.CardLeft}>
                    <img src={card.image} alt="" />
                    <div className={s.cartInfo}>
                        <h4 className={s.cardName}>{card.name}</h4>
                        <p className={s.cartText}>{card.description}</p>
                        <p className={s.cartPrice}>{card.price}</p>
                        <div className={s.cartBlock}>
                            <button className={s.cartButton}>
                                <Link to="/">Избранные</Link>
                            </button>
                            <button
                                onClick={deleteChoseCard}
                                className={s.cartButton}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
                <input
                    className={s.cartInput}
                    type="number"
                    min="0"
                    max="99"
                    onChange={changeValueProduct}
                    defaultValue={productValue}
                />
            </div>
        </div>
    );
};

export default CardItemBasket;
