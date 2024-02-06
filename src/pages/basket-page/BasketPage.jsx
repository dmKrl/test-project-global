import { useSelector } from "react-redux";
import s from "./BasketPage.module.css";
import CardItemBasket from "../../components/UI/card-item-basket/CardItemBasket";
import CartButtonBox from "../../components/cart-button-box/CartButtonBox";
import FormBasket from "../../components/form-basket/FormBasket";
import SpecialProduct from "../../components/special-product/SpecialProduct";
import { selectProductBasket } from "../../redux/slices/basketSlice";

const BasketPage = () => {
    const productBasket = useSelector(selectProductBasket);
    console.log(productBasket);

    return (
        <div className={s.cart}>
            <div className={s.cartWrapper}>
                <div className={s.cartContent}>
                    <div className={s.cardDescription}>
                        <p>Товар</p>
                        <p>К-во</p>
                    </div>
                    {productBasket?.length
                        ? productBasket?.map((card, index) => {
                              return <CardItemBasket card={card} key={index} />;
                          })
                        : "В настоящий момент, корзина пуста"}
                    <CartButtonBox />
                </div>

                <div className={s.cartOrder}>
                    <h3 className={s.cartHeading}>Оформление заказа</h3>
                    <FormBasket />
                </div>
            </div>
            <SpecialProduct />
        </div>
    );
};

export default BasketPage;
