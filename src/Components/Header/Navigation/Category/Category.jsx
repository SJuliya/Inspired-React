import style from './Category.module.scss';
import {NavLink} from "react-router-dom";

export const Category = ({list}) => (
    <>
        {list.map((item) => (
            <ul key={`${item.link}-${item.categories.link}`} className={style.category}>
                {item.categories.map(category => (
                    <li key={category.link}>
                        <NavLink className={style.link} to={`${item.link}/${category.link}`}>
                            {category.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        ))}
    </>
);