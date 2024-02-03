import { Link } from "react-router-dom";
import dataSale from "../../dataSale.json";
import s from "./BacketPage.module.css";
import CardItem from "../../components/UI/card-item/CardItem";

const BacketPage = () => {
    return (
        <>
            <div className={s.cart}>
                <div className={s.cartContent}>
                    <div className={s.cardDescription}>
                        <p>Товар</p>
                        <p>К-во</p>
                    </div>
                    <div className={s.cartItem}>
                        <div className={s.CardLeft}>
                            <img src="/image/MENU.png" alt="" />
                            <div className={s.cartInfo}>
                                <h4 className={s.cardName}>Стол MENU</h4>
                                <p className={s.cartText}>
                                    Для того чтобы трапезничать было приятно,
                                    необходим правильный обеденный стол.
                                </p>
                                <p className={s.cartPrice}>34 000 руб.</p>
                                <div className={s.cartBlock}>
                                    <button className={s.cartButton}>
                                        Избранные
                                    </button>
                                    <button className={s.cartButton}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <input
                            class={s.cartInput}
                            type="number"
                            min="1"
                            defaultValue="1"
                        />
                    </div>
                    <div className={s.cartItem}>
                        <div className={s.CardLeft}>
                            <img src="/image/MENU.png" alt="" />
                            <div className={s.cartInfo}>
                                <h4 className={s.cardName}>Стол MENU</h4>
                                <p className={s.cartText}>
                                    Для того, чтобы трапезничать
                                </p>
                                <p className={s.cartPrice}>34 000 руб.</p>
                                <div className={s.cartBlock}>
                                    <button className={s.cartButton}>
                                        Избранные
                                    </button>
                                    <button className={s.cartButton}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <input
                            class={s.cartInput}
                            type="number"
                            min="1"
                            defaultValue="1"
                        />
                    </div>
                    <div className={s.cartButtonBox}>
                        <button className={s.formSubmit}>
                            Очистить корзину
                        </button>
                        <button>
                            <Link className={s.formSubmit} to="/">
                                Продолжить покупки
                            </Link>
                        </button>
                    </div>
                </div>

                <div className={s.cartOrder}>
                    <h3 className={s.cartHeading}>Оформление заказа</h3>
                    <form className={s.form}>
                        <input
                            type="text"
                            className={s.formInput}
                            placeholder="Имя Фамилия"
                        />
                        <input
                            type="text"
                            className={s.formInput}
                            placeholder="+ 7 904 000 80 80"
                        />
                        <input
                            type="text"
                            className={s.formInput}
                            placeholder="Адрес доставки"
                        />
                        <p className={s.formResult}>Итого: </p>
                        <button className={s.formSubmit}>Оформить заказ</button>
                    </form>
                </div>
            </div>
            <div className={s.productBox}>
                <h2 className={s.heading}>Специальные предложение</h2>
                <div className={s.productContent}>
                    {dataSale.map((card) => {
                        return <CardItem card={card} />;
                    })}
                </div>
                <div className={s.middleCatalogBlock}>
                    <Link to="/">Перейти в каталог</Link>
                </div>
            </div>
        </>
    );
};

export default BacketPage;
