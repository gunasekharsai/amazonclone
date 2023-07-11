import { getProductsReducers } from "./productreducers";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getProductsdata : getProductsReducers
});

export default rootreducers;