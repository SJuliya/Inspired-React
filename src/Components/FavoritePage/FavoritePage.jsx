import {useDispatch, useSelector} from "react-redux";
import {Goods} from "../Goods/Goods.jsx";
import {useEffect} from "react";
import {fetchCategory} from "../../features/goodsSlice";

export const FavoritePage = () => {
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        dispatch(fetchCategory({list: favorites}))
    }, [favorites, dispatch]);

    return (
        <Goods title="Избранное" />
    )
}