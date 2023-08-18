import {useParams} from "react-router-dom";
import {Container} from "../Layout/Container/Container";
import {useEffect} from "react";
import {fetchCategory, fetchGender} from "../../features/goodsSlice";
import {useDispatch, useSelector} from "react-redux";
import style from "./MainPage.module.scss";
import {Product} from "../Product/Product";
import {setActiveGender} from "../../features/navigationSlice";

export const MainPage = () => {
    const {gender, category} = useParams();
    const dispatch = useDispatch();
    const {goodsList} = useSelector(state => state.goods);
    const {activeGender, categories} = useSelector(state => state.navigation);

    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [gender, dispatch]);

    useEffect(() => {
        if (gender & category) {
            dispatch(fetchCategory({gender, category}));
            return ;
        }
        dispatch(fetchGender(gender))
    }, [gender, dispatch])

    return (
        <section className={style.goods}>
            <Container>
                <h2 className={style.title}>Новинки</h2>
                <ul className={style.list}>
                    {goodsList.map(item =>
                        <li key={item.id}>
                            <Product {...item} />
                        </li>)}
                </ul>
            </Container>
        </section>
)};