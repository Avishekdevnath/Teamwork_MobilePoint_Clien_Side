const intialState = {
    mobiles: [],
};

export const mobilesReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_MOBILES':
            return { ...state, mobiles: payload };
        default:
            return state;
    }
};

