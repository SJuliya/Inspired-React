import style from './CartItem.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../../../const";
import cn from "classnames";
import {Count} from "../../../Count/Count";
import {ReactComponent as DelSVG} from '../../../../assets/del.svg';
import {addToCart} from "../../../../features/cartSlice";

export const CartItem = ({id, color, size, count, goodsList}) => {
    const dispatch = useDispatch();
    const {colorsList} = useSelector(state => state.color);
    const item = goodsList.find(item => item.id === id);

    const handleCountChange = (count) => {
        dispatch(addToCart({id, color, size, count}));
    };

    return (
        <article className={style.item}>
            <img className={style.image} src={`${API_URL}/${item?.pic}`} alt={item?.title} />

            <div className={style.content}>
                <h3 className={style.title}>{item?.title}</h3>
                <p className={style.price}>руб {item?.price}</p>
                <div className={style.vendorCode}>
                    <span className={style.subtitle}>Артикул</span>
                    <span>{id}</span>
                </div>
            </div>

            <div className={style.prop}>
                <div className={style.color}>
                    <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
                    <div
                        className={style.colorItem}
                        style={{"--data-color": colorsList?.find(item => item.title === color)?.code}}
                    ></div>
                </div>

                <div className={style.size}>
                    <p className={cn(style.subtitle, style.sizeTitle)}>Размер</p>
                    <div className={style.sizeItem}>{size}</div>
                </div>
            </div>

            <button className={style.del} aria-label='Удалить товар из корзины'>
                <DelSVG />
            </button>

            <Count
                className={style.count}
                count={count}
                handleDecrement={() => {
                    handleCountChange(count - 1);
                }}
                handleIncrement={() => {
                    handleCountChange(count + 1);
                }}
            />
        </article>
    );
}