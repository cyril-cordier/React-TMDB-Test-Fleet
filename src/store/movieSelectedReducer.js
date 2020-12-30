export default function movieSelectedReducer(state = {selected: []}, action) {
    switch(action.type){
        case 'SELECTED':
            
            return { 
                selected: action.payload
            }
        default: 
            return state;
    }
}