import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";
import { bikesReducer } from "./bikesReducer";
import { reviewsReducer } from "./reviewsReducer";
import { ordersReducer } from "./ordersReducer";
const reducers = combineReducers({
    firebaseReducer: firebaseReducer,
    bikesReducer: bikesReducer,
    reviewsReducer: reviewsReducer,
    ordersReducer: ordersReducer
    // product: selectedProductsReducer,
});
export default reducers;
