import style from './Search.module.scss';
import {Container} from "../Layout/Container/Container";
import {useSelector} from "react-redux";

export const Search = () => {
    const {openSearch} = useSelector((state) => state.search);

    return (
        openSearch && (
            <div className={style.search}>
                <Container>
                    <form className={style.form}>
                        <input className={style.input} type="search" name='search' placeholder='Найти...' />
                        <button className={style.btn} type='submit'>Искать</button>
                    </form>
                </Container>
            </div>
    ))
}