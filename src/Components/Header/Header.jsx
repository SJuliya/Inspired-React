import {Top} from "./Top/Top";
import {Navigation} from "./Navigation/Navigation";
import style from "./Header.module.scss"
import {Search} from "../Search/Search";

export const Header = () => (
    <header className={style.header}>
        <Top />
        <Search />
        <Navigation />
    </header>
)