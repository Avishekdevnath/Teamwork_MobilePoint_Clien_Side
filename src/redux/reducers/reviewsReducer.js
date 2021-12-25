const intialState = {
    reviews: [],
};

export const reviewsReducer = (state = intialState, { type, payload }) => {
    // console.log('payload', payload);
    switch (type) {
        case 'SET_REVIEWS':
            return { ...state, reviews: payload };
        default:
            return state;
    }
};