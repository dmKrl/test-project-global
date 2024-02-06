import { useDispatch, useSelector } from "react-redux";
import s from "../../pages/basket-page/BasketPage.module.css";
import {
    clearAllProductBasket,
    selectFullPrice,
    selectProductBasket,
} from "../../redux/slices/basketSlice";
import { useForm } from "react-hook-form";
import { setIsShowingPopup } from "../../redux/slices/popupSlice";

const FormBasket = () => {
    const productBasket = useSelector(selectProductBasket);
    const fullPrice = useSelector(selectFullPrice);
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });
    function onSubmit() {
        dispatch(setIsShowingPopup());
        dispatch(clearAllProductBasket());
        reset();
    }
    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("firstName", {
                    required: "Поле обязательно к заполнению",
                })}
                type="text"
                className={s.formInput}
                placeholder="Имя Фамилия"
            />
            <span className={s.messageError}>
                {errors?.firstName && <p>{errors?.firstName?.message}</p>}
            </span>
            <input
                {...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 10,
                        message: "Минимум 10 символов",
                    },
                })}
                type="number"
                className={s.formInput}
                placeholder="+ 7 904 000 80 80"
            />
            <span className={s.messageError}>
                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message}</p>}
            </span>
            <input
                {...register("address", {
                    required: "Поле обязательно к заполнению",
                })}
                type="text"
                className={s.formInput}
                placeholder="Адрес доставки"
            />
            <span className={s.messageError}>
                {errors?.address && <p>{errors?.address?.message}</p>}
            </span>
            <p className={s.formResult}>Итого: {fullPrice} руб.</p>
            <button
                type="submit"
                className={s.formSubmit}
                disabled={!productBasket.length}
            >
                Оформить заказ
            </button>
        </form>
    );
};

export default FormBasket;
