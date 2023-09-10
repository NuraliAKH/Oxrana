const newState = {
    card: []
}
function setNCard(state = newState, action) {
    if (action.type === 'add') {
        const currentCard1 = [...state.card];
        currentCard1.push(action.payload);
        state = { ...state, card: currentCard1 };
        return state;
    }
    if (action.type === 'addd') {
        let currentCard2 = [...state.card];
        currentCard2.push(action.payload);
        state = { ...state, card: currentCard2 };
        console.log(state);
        return state;
    }

    return state;
}
export { setNCard };