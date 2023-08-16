import style from "./Product.module.scss";
import {API_URL} from "../../const";
import {NavLink} from "react-router-dom";
import {ReactComponent as Like} from '../../assets/heart.svg';
import {ColorList} from '../ColorList/ColorList';

export const Product = ({id, pic, title, price, colors}) => (
    <article className={style.product}>
        <NavLink className={style.link} to={`product/${id}`}>
            <img className={style.image} src={`${API_URL}/${pic}`} alt=""/>
            <h3 className={style.title}>{title}</h3>
        </NavLink>

        <div className={style.row}>
            <p className={style.price}>руб {price}</p>

            <button className={style.favorite}>
                <Like />
            </button>
        </div>

        <ColorList colors={colors} />
    </article>
);
