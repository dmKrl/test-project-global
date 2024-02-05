import s from "./CatalogPage.module.css";
import CardItem from "../../components/UI/card-item/CardItem";
import data from "../../data.json";

const CatalogPage = () => {
    console.log(data);
    return (
        <div className={s.product}>
            <div className={s.productContent}>
                {data.map((card, index) => {
                    return <CardItem card={card} key={index} />;
                })}
            </div>
        </div>
    );
};

export default CatalogPage;
