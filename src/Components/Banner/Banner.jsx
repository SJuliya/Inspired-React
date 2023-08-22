import style from './Banner.module.scss';
import {Container} from "../Layout/Container/Container";
import {NavLink} from "react-router-dom";
import {API_URL} from "../../const";
import {useMedia} from "react-use";
import {useEffect, useState} from "react";

export const  Banner = ({data}) => {
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');
    const [bgURL, setBgUrl] = useState('')

    useEffect(() => {
        if (isMobile) {
            setBgUrl(`${API_URL}/${data?.bg.mobile}`);
        } else if (isTablet) {
            setBgUrl(`${API_URL}/${data?.bg.tablet}`);
        } else if (isLaptop) {
            setBgUrl(`${API_URL}/${data?.bg.laptop}`);
        } else {
            setBgUrl(`${API_URL}/${data?.bg.desktop}`);
        }
    }, [isMobile, isTablet, isLaptop, data]);

    return (
        data &&
        <section
            className={style.banner}
            style={{
                backgroundImage: `url(${bgURL})`
            }}
        >
            <Container>
                <div className={style.content}>
                    <h2 className={style.title}>{data.description}</h2>
                    <NavLink className={style.link} to={`/product/${data.id}`}>
                        Перейти
                    </NavLink>
                </div>
            </Container>
        </section>
    );
};