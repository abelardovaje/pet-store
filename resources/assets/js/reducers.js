import {combineReducers} from 'redux';
import PetsReducer from './Home/pet/reducers';
const Reducers = combineReducers({
    Pets:PetsReducer,
});

export default Reducers;