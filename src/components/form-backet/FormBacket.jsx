import { useSelector } from "react-redux";
import s from "../../pages/backet-page/BacketPage.module.css";
import { selectFullPrice } from "../../redux/slices/backetSlice";

const FormBacket = () => {
    const fullPrice = useSelector(selectFullPrice);
    console.log(fullPrice);
    return (
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
            <p className={s.formResult}>Итого: {fullPrice} руб.</p>
            <button className={s.formSubmit}>Оформить заказ</button>
        </form>
    );
};

export default FormBacket;
