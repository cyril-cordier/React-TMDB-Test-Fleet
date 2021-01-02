export default function searchReducer(state = {search: []}, action) {
    switch(action.type){
        case 'SEARCH':
            
            return { 
                search: action.payload
            }
        case 'RESET':
        
            return { 
                search: []
            }
            
        default: 
            return state;
    }
}