import moment from 'moment'; 

const initialState = {
    BudgetMonth: moment().format("MMM"),
    BudgetYear: moment().format("YYYY") 
};

export default function (state = initialState, action) {
    // switch (action.type) { }
    return state;
}