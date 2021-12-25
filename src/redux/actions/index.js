export const firebase = (payload) => {
    return {
        type: 'FIREBASE',
        payload: payload,
    };
};
export const user = (payload) => {
    return {
        type: 'USER',
        payload: payload,
    };
};
export const setBikes = (payload) => {
    return {
        type: 'SET_BIKES',
        payload: payload,
    };
};

export const setReviews = (payload) => {
    return {
        type: 'SET_REVIEWS',
        payload: payload,
    };
};

export const setOrder = (payload) => {
    return {
        type: 'SET_ORDERS',
        payload: payload,
    };
};