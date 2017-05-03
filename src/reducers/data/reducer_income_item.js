import {NEW_INCOME_ITEM} from '../../actions/data/action_income_item'
import moment from 'moment';

const initialState = {
    0: {
        category_id: 1,
        date: moment("2017-04-20").format("MMM Do YY"),
        desc: "First Salary",
        amount: 1000
    },
    1: {
        category_id: 1,
        date: moment("2017-05-20").format("MMM Do YY"),
        desc: "Second Salary",
        amount: 1000
    },
    2: {
        category_id: 0,
        date: moment("2017-05-20").format("MMM Do YY"),
        desc: "Third Salary",
        amount: 1000
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_INCOME_ITEM:
            return [
                ...state,
                ...action.payload
            ]
    }
    return state;
}
//