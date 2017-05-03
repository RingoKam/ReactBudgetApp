import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class BudgetDate extends Component {

  renderMonthOptions(currentMonth) {
    const months = moment.monthsShort();
    return months.map(month => {
      console.log(month, "and", currentMonth)
      if(month === currentMonth)
        return (<option selected>{month}</option>)
      else {
        return (<option>{month}</option>)
      }
    })
  }

  renderYearOptions(currentyear) {
    const year = moment().format("YYYY");
    const years = [];
    for (var i = year; i > 1990; i--) {
      years.push(<option>{i}</option>)
    }
    return years;
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="card card-inverse">
          <div className="card-block card-primary text-center">
            <div className="row">
              <div className="form-group col-sm-4">
                <label htmlFor="ccmonth">Month</label>
                <select className="form-control" id="ccmonth">
                  {this.renderMonthOptions(this.props.BudgetDate.BudgetMonth)}
                </select>
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="ccyear">Year</label>
                <select className="form-control" id="ccyear">
                  {this.renderYearOptions(this.props.BudgetDate.BudgetYear)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function MapStatesToProps(state) {
    return state.ui
}

export default connect(MapStatesToProps)(BudgetDate);
