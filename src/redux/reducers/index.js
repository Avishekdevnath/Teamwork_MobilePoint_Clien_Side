import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";
import { mobilesReducer } from "./mobilesReducer";
import { reviewsReducer } from "./reviewsReducer";
import { ordersReducer } from "./ordersReducer";
const reducers = combineReducers({
    firebaseReducer: firebaseReducer,
    mobilesReducer: mobilesReducer,
    reviewsReducer: reviewsReducer,
    ordersReducer: ordersReducer
    // product: selectedProductsReducer,
});
export default reducers;
