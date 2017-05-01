import accounting from 'accounting'

export const NEW_INCOME_ITEM = 'ADD_NEW_INCOME_ITEM';
export const GET_INCOME_ITEM = 'GET_INCOME_ITEM';

export function AddIncomeItem(IncomeItem) {
    return {
        type: NEW_INCOME_ITEM,
        payload: IncomeItem
    }
}

export function GetIncomeItem() {
    return {
        type: GET_INCOME_ITEM
    }
}