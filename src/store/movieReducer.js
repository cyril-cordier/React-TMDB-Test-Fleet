export default function movieReducer(state = {selected: []}, action) {
    switch(action.type){
        case 'SELECT':
            return {
                selected: action.payload
            }
        default: 
            return state;
    }
}