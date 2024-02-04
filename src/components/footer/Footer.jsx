import { Link } from "react-router-dom";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.footerLogo}>
                    <Link to="/">Интерьер</Link>
                </div>
                <div className={s.footerInfo}>
                    <div className={s.footerItem}>
                        <h4 className={s.footerHeading}>Меню</h4>
                        <div className={s.footerNav}>
                            <Link to="/">Каталог</Link>
                            <Link to="/backet-page">Корзина</Link>
                        </div>
                    </div>
                    <div className={s.footerItem}>
                        <h4 className={s.footerHeading}>Контакты</h4>
                        <div className={s.footerNav}>
                            <Link to="+79111111111">+7 908 800 80 80</Link>
                            <Link to="malito:random_mail@mail.ru">
                                help@interier.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
