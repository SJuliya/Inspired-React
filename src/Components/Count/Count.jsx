import style from './Count.module.scss';
import cn from "classnames";

export const Count = ({className, count, handleIncrement,handleDecrement}) => (
    <div className={cn(style.count, className)}>
        <button className={style.item} type='button' onClick={handleDecrement}>-</button>
        <span className={cn(style.item, style.number)}>{count}</span>
        <button className={style.item} type='button' onClick={handleIncrement}>+</button>
    </div>
)