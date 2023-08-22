import {combineReducers} from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice";
import colorsReducer from "./features/colorsSlice";
import goodsReducer from "./features/goodsSlice";
import productReducer from "./features/productSlice";

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorsReducer,
    goods: goodsReducer,
    product: productReducer,
});