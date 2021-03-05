let initialState = "topclothes";

const chosenCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SECLECTED_CATE":
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default chosenCategoriesReducer;