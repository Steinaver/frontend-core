import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss';
import { Navbar } from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    )
};

export default App;