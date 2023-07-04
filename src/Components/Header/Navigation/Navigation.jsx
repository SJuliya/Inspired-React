import {Gender} from "./Gender/Gender";
import {Category} from "./Catefory/Category";

export const Navigation = () => (
    <nav>
        <div className="container">
            <Gender />
            <Category />
        </div>
    </nav>
)