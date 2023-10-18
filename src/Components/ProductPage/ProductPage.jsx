import style from './ProductPage.module.scss';
import {Container} from "../Layout/Container/Container";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../features/productSlice";
import {useParams} from "react-router-dom";
import {API_URL} from "../../const";
import cn from "classnames";
import {ColorList} from "../ColorList/ColorList";
import {Count} from "../Count/Count";
import {BtnLike} from "../BtnLike/BtnLike";
import {addToCart} from "../../features/cartSlice";
import {ProductSize} from "./ProductSize/ProductSize";
import {Goods} from "../Goods/Goods";
import {fetchCategory} from "../../features/goodsSlice";
import {Form, ErrorMessage, Formik} from "formik";
import * as Yup from "yup";

export const ProductPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product, status: statusProduct} = useSelector(state => state.product);
    const {colorsList, status: statusColor } = useSelector(state => state.color);

    const {gender, category, colors} = product;
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const validationSchema = Yup.object({
        size: Yup.string().required('Выберите размер'),
    });

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);

    useEffect(() => {
       dispatch(fetchCategory({gender, category, count: 4, top: true, exclude: id}))
    }, [gender, category, id, dispatch]);

    return (
        [statusProduct, statusColor].every((status) => status === "success") && (
        <>
            <section className={style.card}>
                <Container className={style.container}>
                    <img
                        className={style.image}
                        src={`${API_URL}/${product.pic}`}
                        alt={product.title}
                    />
                    <Formik
                    initialValues={{
                        color: colorsList.filter((item) => colors.includes(item.id))[0].title,
                        size: '',
                        count: 1,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        values.count = count;
                        dispatch(addToCart({
                            id,
                            ...values,
                        }));
                    }}>
                        <Form className={style.content}>
                            <h2 className={style.title}>{product.title}</h2>
                            <p className={style.price}>руб {product.price}</p>

                            <div className={style.vendorCode}>
                                <span className={style.subtitle}>Артикул</span>
                                <span className={style.id}>{product.id}</span>
                            </div>

                            <div className={style.color}>
                                <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
                                <ColorList colors={colors} validate={true} />
                            </div>

                            <ProductSize size={product.size} />

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
                                <ErrorMessage className={style.error} name="size" component="p" />
                                <BtnLike id={id} />
                            </div>
                        </Form>
                    </Formik>
                </Container>
            </section>

            <Goods title='Вам также может понравиться' />
        </>
    ));
};