import React from 'react'

const QBudget = (props) => {
  const budget = props.budget.toLocaleString('ES')
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title activator">
          Q1 Budget
        </span>
        <p className="money activator">${budget}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title">Budget<i className="material-icons right">close</i></span>
        <p className="xlarge-text">120 bees X $500 = $180.000</p>
      </div>
    </div>
  )
}

export default QBudget
