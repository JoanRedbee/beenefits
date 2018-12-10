import React from 'react'

const QBudget = () => {
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title activator">
          Q1 Budget
        </span>
        <p className="money activator">$180.000</p>
      </div>
      <div className="card-reveal">
        <span className="card-title">Budget<i className="material-icons right">close</i></span>
        <p>120 bees X $500 = $180.000</p>
      </div>
    </div>
  )
}

export default QBudget
