import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
    const location = useLocation();
    return (
        <div
            className={
                location.pathname === "/" ? `${s.header} ${s.headerCatalog}` : `${s.header} ${s.headerBasket}`
            }
        >
            <div className={s.headerContainer}>
                <div className={s.headerWrapper}>
                    <div className={s.headerLogo}>
                        <Link to="/">Интерьер</Link>
                    </div>
                    <nav className={s.nav}>
                        {location.pathname === "/" ? (
                            <Link to="/basket-page">Корзина</Link>
                        ) : (
                            <Link to="/">Каталог</Link>
                        )}
                    </nav>
                </div>
                <div className={s.headerBlock}>
                    {location.pathname === "/" ? (
                        <h1 className={s.headerHeading}>Каталог</h1>
                    ) : (
                        <h1 className={s.headerHeading}>Корзина</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
