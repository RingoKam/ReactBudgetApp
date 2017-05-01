import React from 'react' 

export default function (props) {
    console.log("Income Item happened", props.IncomeItem.date)
    const date = props.IncomeItems.date; 
    const desc = props.IncomeItem.desc; 
    const amount = props.IncomeItem.amount; 
    return(
        <tr>
            <td> {desc} </td>
            <td> Whooooo </td>
            <td> {amount} </td>
        </tr>
    )
}