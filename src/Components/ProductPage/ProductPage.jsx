import style from './ProductPage.module.scss';
import {Container} from "../Layout/Container/Container";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../features/productSlice";
import {useParams} from "react-router-dom";
import {API_URL} from "../../const";
import cn from "classnames";
import {ColorList} from "../ColorList/ColorList";

export const ProductPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product} = useSelector(state => state.product);
    const [selectedColor, setSelectedColor] = useState('');

    const handlerColorChange = e => {
        setSelectedColor(e.target.value);
    }

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);

    return (
        <section className={style.card}>
            <Container className={style.container}>
                <img src={`${API_URL}/${product.pic}`} alt={product.title} />
                <form className={style.content}>
                    <h2 className={style.title}>{product.title}</h2>
                    <p className={style.price}>руб {product.price}</p>

                    <div className={style.vendorCode}>
                        <span className={style.subtitle}>Артикул</span>
                        <span className={style.id}>{product.id}</span>
                    </div>

                    <div className={style.color}>
                        <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
                        <ColorList
                            colors={product.colors}
                            selectedColor={selectedColor}
                            handlerColorChange={handlerColorChange}
                        />
                    </div>
                </form>
            </Container>
        </section>
    );
};