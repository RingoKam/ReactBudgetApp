import { combineReducers } from 'redux';
import DataReducer from './data/data'; 
import UiReducer from './ui/ui'; 

const rootReducer = combineReducers({
    data: DataReducer,
    ui: UiReducer
});

export default rootReducer;
