import {Top} from "./Top/Top";
import {Navigation} from "./Navigation/Navigation";
import style from "./Header.module.scss"

export const Header = () => (
    <header className={style.header}>
        <Top />
        <Navigation />
    </header>
)