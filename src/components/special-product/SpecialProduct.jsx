import s from "../../pages/basket-page/BasketPage.module.css";
import dataSale from "../../dataSale.json";
import { Link } from "react-router-dom";
import CardItem from "../../components/UI/card-item/CardItem";

const SpecialProduct = () => {
    return (
        <div className={s.productBox}>
            <h2 className={s.heading}>Специальные предложение</h2>
            <div className={s.productContent}>
                {dataSale.map((card, index) => {
                    return <CardItem card={card} key={index} index={index} />;
                })}
            </div>
            <div className={s.middleCatalogBlock}>
                <Link to="/">Перейти в каталог</Link>
            </div>
        </div>
    );
};

export default SpecialProduct;
