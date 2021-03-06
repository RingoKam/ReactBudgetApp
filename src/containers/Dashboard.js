import React, {Component} from 'react';
import IncomeList from './Income_list';
import BudgetDate from './Budget_date';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-8">
            <BudgetDate />
            <IncomeList />
          </div>
          <div className="col-md-4">
            Budget Summary Goes here
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
