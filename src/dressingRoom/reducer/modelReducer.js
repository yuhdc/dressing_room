let initialState = {
    topclothes: '',
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: 'url("images/background/background_998.jpg")',
}

const ModelReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SECLECTED_PRODUCT":
            //literal object
            state[action.payload.type] = action.payload.img;
            console.log(state);
            //action có type là topcloth thì cái này thành state.topcloth
            return { ...state };
        default:
            return state;
    }
}

export default ModelReducer;

