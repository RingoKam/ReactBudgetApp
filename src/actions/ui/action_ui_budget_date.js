export const SET_BUDGET_DATE = 'SET_BUDGET_DATE';

export function SetBudgetDate(BudgetDate) {
    return {
        type: SET_BUDGET_DATE,
        payload: BudgetDate
    }
}