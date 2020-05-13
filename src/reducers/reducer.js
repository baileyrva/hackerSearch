const initState = {
    searches: [], 
    results: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'CREATE_SEARCH') {
        return {
            ...state, 
            searches: [...state.searches, action.terms]
        }
    } else if (action.type === 'FETCH_RESULTS') {
        return {
            ...state,
            results: action.results 
        }
    } else if (action.type === 'FETCH_RESULTS_ERROR') {
        console.log("Error fetching results", action.err);
        return state;
    }
    return state; 
}

export default rootReducer; 