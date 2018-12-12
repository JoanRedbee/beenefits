import React from 'react'

const RecurringBenefitItem = (props) => {
  return (
    <li className="collection-item">{props.name} - $ {props.amount}</li>
  )
}

export default RecurringBenefitItem
