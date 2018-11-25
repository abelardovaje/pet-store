import _ from 'lodash';
export default function user(state=[],action={}){
    let newState = {...state};
    let handlers = {
        UPDATE_PETS:updatePets,
    }

    if(!handlers[action.type]) return state;
    return handlers[action.type]() || state;

    function updatePets(){
        newState = action.payload;
        console.log('pETS:',newState);
        return newState;
    }

}