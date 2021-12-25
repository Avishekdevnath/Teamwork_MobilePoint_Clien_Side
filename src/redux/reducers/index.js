import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";
import { bikesReducer } from "./bikesReducer";
import { reviewsReducer } from "./reviewsReducer";
const reducers = combineReducers({
    firebaseReducer: firebaseReducer,
    bikesReducer: bikesReducer,
    reviewsReducer: reviewsReducer
    // product: selectedProductsReducer,
});
export default reducers;
