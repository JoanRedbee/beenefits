import React from 'react'
import RecurringBenefitItem from './BenefitItem';

const RecurringBenefitsList = (props) => {
  return (
    <div>
        {
          props.months.map(month => {
            return (
              <ul key={month.name} className="collection with-header">
                <li className="collection-header list-header"><h5>{month.name}</h5></li>
                  {
                    month.recurring_benefits.map(benefit => {
                      return (
                        <RecurringBenefitItem 
                          name={benefit.name}
                          amount={benefit.amount}
                          key={benefit.name}
                        />
                      )
                    })
                  }
              </ul>
            )
          })
        }
    </div>
  )
}

export default RecurringBenefitsList