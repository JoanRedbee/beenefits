import React from 'react'

function budgetPerMonth(month) {
  return month.bees * month.$_per_bee
}

const QBudget = (props) => {
  const budget = props.months.map(budgetPerMonth).reduce((prev, actual) => prev + actual, 0);
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title activator">
          Q1 Budget
        </span>
        <p className="money activator">${budget.toLocaleString('ES')}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title">Budget<i className="material-icons right">close</i></span>
        {
          props.months.map(month => {
            const monthBudget = month.bees * month.$_per_bee;
            return (
              <p key={month.name}>{month.name}: {month.bees} bees X ${month.$_per_bee} = ${monthBudget.toLocaleString('ES')}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default QBudget
