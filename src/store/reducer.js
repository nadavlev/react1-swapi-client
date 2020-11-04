const initialState = {
    people: [],
    favoritePeople: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_TOGGLE_FAVORITE':
            const newFavoritePeople = {...state.favoritePeople};
            newFavoritePeople[action.personId] = !newFavoritePeople[action.personId];
            return {
                ...state,
                favoritePeople: newFavoritePeople
            }
    }

    return state;
};

export default reducer;
