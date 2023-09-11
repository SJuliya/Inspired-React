import {Container} from "../../Layout/Container/Container";
import style from "./Top.module.scss";
import cn from "classnames";
import logo from "../../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import {ReactComponent as LikeSVG} from '../../../assets/heart.svg';
import {ReactComponent as SearchSVG} from '../../../assets/search.svg';
import {ReactComponent as CartSVG} from '../../../assets/cart.svg';
import {useDispatch, useSelector} from "react-redux";
import {toggleSearch} from "../../../features/searchSlice";

export const Top = () => {
    const {countItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleOpenSearch = () => {
        dispatch(toggleSearch())
    }

    return (
        <div className={style.top}>
            <Container className={style.topContainer}>
                <a className={cn(style.topLink, style.topPhone)} href="tel:89304902620">8 930 490 26 20</a>

                <NavLink className={style.topLogo} to="/">
                    <img src={logo} alt="Логотип Inspired"/>
                </NavLink>

                <div className={style.topNavigation}>
                    <ul className={style.topNavList}>
                        <li className={style.topNavItem}>
                            <button className={style.topLink} onClick={handleOpenSearch}>
                                <SearchSVG />
                            </button>
                        </li>
                        <li className={style.topNavItem}>
                            <NavLink to='/cart' className={style.topLink}>
                                <CartSVG />
                                <span className={style.topLinkCount}>{countItems}</span>
                            </NavLink>
                        </li>
                        <li className={style.topNavItem}>
                            <NavLink to='/favorite' className={cn(style.topLink, style.topLike)}>
                                <LikeSVG />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}