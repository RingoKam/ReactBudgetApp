import { combineReducers } from 'redux';
import Budget from './reducer_budget'; 
import IncomeItem from './reducer_income_item'; 
import Category from './reducer_category';

const rootReducer = combineReducers({
    IncomeItems: IncomeItem,
    Category: Category, 
    Budget: Budget
});

export default rootReducer;