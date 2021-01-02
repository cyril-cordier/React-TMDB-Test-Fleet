export default function movieReducer(state = {selected: [], genre: []}, action) {
    switch(action.type){
        case 'SELECT':
            return {
                selected: action.payload
            }
        case 'GENRE':
            return {
                genre: action.payload
            }
        default: 
            return state;
    }
}