import {useLocation, useNavigate, useRouteError} from 'react-router-dom';
import style from './ErrorPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {fetchColors} from "../../features/colorsSlice";
import {fetchNavigation} from "../../features/navigationSlice";

export const ErrorPage = () => {
    const routeError = useRouteError();
    const {status} = useSelector(state => state.statusServer);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const timeIdRef = useRef(null);

    useEffect(() => {
        if (status && location.pathname === '/404') {
            navigate('/');
        }
    }, [navigate, status, location]);

    useEffect(() => {
        if (!status && location.pathname === '/404') {
            clearInterval(timeIdRef.current);

            timeIdRef.current = setInterval(() => {
                dispatch(fetchColors());
                dispatch(fetchNavigation());
            }, 3000)
        }

        return () => {
            clearInterval(timeIdRef.current);
        }
    }, [dispatch, status, location]);

    return (
        <div className={style.error}>
            <h2 className={style.title}>Произошла ошибка</h2>
            <p className={style.message}>{routeError?.message ?? 'Неизвестная ошибка, попробуйте позже'}</p>
        </div>
    );
}