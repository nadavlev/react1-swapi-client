const initialState = {
    favoritePeople: JSON.parse(window.localStorage.getItem('favoritePeople')) || {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_TOGGLE_FAVORITE':
            const newFavoritePeople = {...state.favoritePeople};
            newFavoritePeople[action.personId] = !newFavoritePeople[action.personId];
            window.localStorage.setItem('favoritePeople', JSON.stringify(newFavoritePeople));
            return {
                ...state,
                favoritePeople: newFavoritePeople
            }
    }

    return state;
};

export default reducer;
