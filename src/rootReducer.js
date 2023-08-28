import {combineReducers} from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice";
import colorsReducer from "./features/colorsSlice";
import goodsReducer from "./features/goodsSlice";
import productReducer from "./features/productSlice";
import favoritesSlice from "./features/favoritesSlice";

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorsReducer,
    goods: goodsReducer,
    product: productReducer,
    favorites: favoritesSlice,
});