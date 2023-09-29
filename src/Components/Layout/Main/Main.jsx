import style from "./Main.module.scss";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation, useNavigate } from "react-router-dom";

export const Main = ({children}) => {
    const {status} = useSelector(state => state.statusServer)

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!status && location.pathname !== '/404') {
            navigate('/404')
        }
    }, [navigate, status, location])

    return <div className={style.main}>{children}</div>;
}