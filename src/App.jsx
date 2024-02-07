import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";

const tele = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tele.ready();
    });

    return <AppRoutes />;
}

export default App;
