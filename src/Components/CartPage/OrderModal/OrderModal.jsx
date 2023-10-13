import {useSelector} from "react-redux";
import style from './OrderModal.modul.scss';

export const OrderModal = () => {
    const {order: {
        values, order, id, totalPrice
    }} = useSelector(state => state.cart);
    const {goodsList} = useSelector(state => state.goods);

    return (
        <div className={style.modal}>
            <div className={style.body}>
                <h2 className={style.title}>Заказ оформлен №{id}</h2>

                <div className={style.description}>
                    <p>Спасибо за выбор нашего магазина!</p>
                    <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
                </div>

                <ul className={style.customer}>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}></span>
                        <span className={style.customerData}></span>
                    </li>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}></span>
                        <span className={style.customerData}></span>
                    </li>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}></span>
                        <span className={style.customerData}></span>
                    </li>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}></span>
                        <span className={style.customerData}></span>
                    </li>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}></span>
                        <span className={style.customerData}></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}