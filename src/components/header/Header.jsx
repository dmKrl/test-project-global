import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className="header">
            <div>
                <Link href="/">Интерьер</Link>
            </div>
            <div>
                <nav>
                    {location.pathname === "/" ? (
                        <Link href="/backet-page">Корзина</Link>
                    ) : (
                        <Link href="/">Каталог</Link>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Header;
