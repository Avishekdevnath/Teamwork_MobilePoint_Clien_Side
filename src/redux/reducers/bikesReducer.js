const intialState = {
    bikes: [],
};

export const bikesReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_BIKES':
            return { ...state, bikes: payload };
        default:
            return state;
    }
};

