import style from "./ColorList.module.scss";
import {useSelector} from "react-redux";
import {Color} from "./Color/Color";

export const ColorList = ({colors}) => {
    const {colorsList} = useSelector(state => state.color);

    return (
        <ul className={style.colorList}>
            {colors.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}