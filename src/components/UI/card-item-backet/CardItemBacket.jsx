import s from "../../../pages/backet-page/BacketPage.module.css";

const CardItemBacket = () => {
    return (
        <div className={s.cartItem}>
            <div className={s.CardLeft}>
                <img src="/image/MENU.png" alt="" />
                <div className={s.cartInfo}>
                    <h4 className={s.cardName}>Стол MENU</h4>
                    <p className={s.cartText}>
                        Для того чтобы трапезничать было приятно, необходим
                        правильный обеденный стол.
                    </p>
                    <p className={s.cartPrice}>34 000 руб.</p>
                    <div className={s.cartBlock}>
                        <button className={s.cartButton}>Избранные</button>
                        <button className={s.cartButton}>Удалить</button>
                    </div>
                </div>
            </div>
            <input class={s.cartInput} type="number" min="1" defaultValue="1" />
        </div>
    );
};

export default CardItemBacket;
