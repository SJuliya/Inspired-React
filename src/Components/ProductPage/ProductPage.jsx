import style from './ProductPage.module.scss';
import {Container} from "../Layout/Container/Container";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../features/productSlice";
import {useParams} from "react-router-dom";
import {API_URL} from "../../const";
import cn from "classnames";
import {ColorList} from "../ColorList/ColorList";
import {ReactComponent as Like} from "../../assets/heart.svg";
import {Count} from "../Count/Count";

export const ProductPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product} = useSelector(state => state.product);

    const [count, setCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

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

{/*                    <ProductSize size={product.size} />*/}

                    <div className={style.description}>
                        <p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
                        <p className={style.descriptionText}>{product.description}</p>
                    </div>

                    <div className={style.control}>
                        <Count
                            className={style.count}
                            count={count}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                        />

                        <button className={style.addCart} type='submit'>В корзину</button>

                        <button
                            className={style.favorite}
                            aria-label='Добавить в избранное'
                            type='button'
                        >
                            <Like />
                        </button>
                    </div>
                </form>
            </Container>
        </section>
    );
};