import style from "./ColorList.module.scss";
import {useSelector} from "react-redux";
import {ColorLabel} from "./ColorLabel/ColorLabel";

export const ColorList = ({colors, selectedColor, handlerColorChange}) => {
    const {colorsList} = useSelector(state => state.color);

    return handlerColorChange ? (
        <div className={style.colorList}>
            {colors?.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <ColorLabel
                    key={id}
                    color={color}
                    check={!i}
                    selectedColor={selectedColor}
                    handlerColorChange={handlerColorChange}
                />
            })}
        </div>
        ) : (
        <ul className={style.colorList}>
            {colors.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <ColorLabel key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}