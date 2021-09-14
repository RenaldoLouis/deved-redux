const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SiGN_IN":
            return !state
        default:
            return state
    }
};

export default loggedReducer;