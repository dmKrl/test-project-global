import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <h4>Интерьер</h4>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                </div>
            </div>
            <div>
                <h4>Контакты</h4>
                <div>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
