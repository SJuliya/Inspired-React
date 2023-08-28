import {Container} from "../Layout/Container/Container";
import {Product} from "../Product/Product";
import {useSelector} from "react-redux";
import style from './Goods.module.scss';

export const Goods = ({categoryData, title}) => {
    const {goodsList} = useSelector(state => state.goods);

    const pageTitle = title ?? categoryData?.title ?? 'Новинки';

    return (
        <section className={style.goods}>
            <Container>
                <h2 className={style.title}>{pageTitle}</h2>
                <ul className={style.list}>
                    {goodsList.map(item =>
                        <li key={item.id}>
                            <Product {...item} />
                        </li>)}
                </ul>
            </Container>
        </section>
    )
}