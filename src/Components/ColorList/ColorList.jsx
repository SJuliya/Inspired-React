import style from "./ColorList.module.scss";
import {useSelector} from "react-redux";
import {ColorLabel} from "./ColorLabel/ColorLabel";
import {Color} from "./Color/Color";

export const ColorList = ({colors, validate}) => {
    const {colorsList} = useSelector(state => state.color);

    return validate ? (
        <div className={style.colorList}>
            {colors?.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <ColorLabel key={id} color={color} check={!i} />
            })}
        </div>
        ) : (
        <ul className={style.colorList}>
            {colors.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    );
};