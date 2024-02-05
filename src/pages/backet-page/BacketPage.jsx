import { useSelector } from "react-redux";
import s from "./BacketPage.module.css";
import CardItemBacket from "../../components/UI/card-item-backet/CardItemBacket";
import CartButtonBox from "../../components/cart-button-box/CartButtonBox";
import FormBacket from "../../components/form-backet/FormBacket";
import SpecialProduct from "../../components/special-product/SpecialProduct";
import { selectProductBacket } from "../../redux/slices/backetSlice";

const BacketPage = () => {
    const productBacket = useSelector(selectProductBacket);
    console.log(productBacket);

    return (
        <div className={s.cart}>
            <div className={s.cartWrapper}>
                <div className={s.cartContent}>
                    <div className={s.cardDescription}>
                        <p>Товар</p>
                        <p>К-во</p>
                    </div>
                    {productBacket?.length
                        ? productBacket?.map((card, index) => {
                              return <CardItemBacket card={card} key={index} />;
                          })
                        : "В настоящий момент, корзина пуста"}
                    <CartButtonBox />
                </div>

                <div className={s.cartOrder}>
                    <h3 className={s.cartHeading}>Оформление заказа</h3>
                    <FormBacket />
                </div>
            </div>
            <SpecialProduct />
        </div>
    );
};

export default BacketPage;
