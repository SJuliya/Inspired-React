import style from "./Product.module.scss";

export const Product = (props) => {
    console.log("-> props", props);
    return (
        <li className={style.row}>
            {props.title}
        </li>
    )
};
