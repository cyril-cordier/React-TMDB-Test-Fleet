const initialState = {
    search: 'initial search', 
    select: []
    
}

const reducer = (state = initialState, action, value) => {
    if(action.type === 'SEARCH'){
        return {
            search: value
        }
    }
    if(action.type === 'SELECTED'){
        return {
            select: value
        }
        
    }
    
    
    console.log(state.select);
    console.log("state", state);
    return state;
}

export default reducer;