import {Gender} from "./Gender/Gender";
import {Category} from "./Category/Category";
import {Container} from "../../Layout/Container/Container";

export const Navigation = ({list}) => (
    <nav>
        <Container>
            <Gender list={list} />
            <Category list={list} />
        </Container>
    </nav>
)