import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'underscore';
import jslinq from 'jslinq';

import IncomeItem from '../components/income_item'
import {AddIncomeItem} from '../actions/data/action_income_item'

class IncomeList extends Component {

    renderIncomeItem() {
        console.log("income item is ", this.props);
        if (!this.props.incomeItems) 
            return (
                <div>Nothing to see here</div>
            )
        return this
            .props
            .incomeItems
            .map((item, index) => {
                console.log("im rendering ", item);
                console.log("Index is ", index);
                return (<IncomeItem key={index} IncomeItem={item}/>)
            })
    }

    render() {
        return (
            <div className="card card-accent-success">
                <div className="card-header">
                    Income
                </div>
                <div className="card-block">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Budget</th>
                                <th>Actual</th>
                                <th>Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderIncomeItem()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    console.log(state);
    const data = state.data; 
    const IncomeListGroup = _.groupBy(Object.keys(data.IncomeItems).map(key => data.IncomeItems[key]), (income) => income.category_id)
    const IncomeList = Object
        .keys(IncomeListGroup)
        .map((key) => {
            var total = IncomeListGroup[key].length > 1
                ? IncomeListGroup[key].reduce((acc, cur) => acc.amount + cur.amount)
                : IncomeListGroup[key][0].amount
            console.log(IncomeListGroup[key], total);
            return {    
                category: data.Category[IncomeListGroup[key][0].category_id],
                budget: data.Budget[IncomeListGroup[key][0].category_id],
                total
            }
        });
    console.log("this is income item, it is ", IncomeList);
    return {incomeItems: IncomeList}
}

function MapStateToDispatch(dispatch) {
    return bindActionCreators({
        AddIncomeItem
    }, dispatch)
}

export default connect(MapStateToProps, MapStateToDispatch)(IncomeList)