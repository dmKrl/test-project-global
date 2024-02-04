import { useSelector } from "react-redux";
import s from "../../../pages/backet-page/BacketPage.module.css";
import { selectProductBacket } from "../../../redux/slices/backetSlice";
import { Link } from "react-router-dom";

const CardItemBacket = () => {
    const productBacket = useSelector(selectProductBacket);
    console.log(productBacket);
    return (
        <div className={s.cartItem}>
            {productBacket.length ? (
                <>
                    {productBacket.map((card, index) => {
                        return (
                            <div className={s.CardLeftBlock} key={index}>
                                <div className={s.CardLeft}>
                                    <img src={card.image} alt="" />
                                    <div className={s.cartInfo}>
                                        <h4 className={s.cardName}>
                                            {card.name}
                                        </h4>
                                        <p className={s.cartText}>
                                            {card.description}
                                        </p>
                                        <p className={s.cartPrice}>
                                            {card.price}
                                        </p>
                                        <div className={s.cartBlock}>
                                            <button className={s.cartButton}>
                                                <Link to="/">Избранные</Link>
                                            </button>
                                            <button className={s.cartButton}>
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className={s.cartInput}
                                    type="number"
                                    min="1"
                                    defaultValue="1"
                                />
                            </div>
                        );
                    })}
                </>
            ) : (
                "В настоящий момент, корзина пуста"
            )}
        </div>
    );
};

export default CardItemBacket;
