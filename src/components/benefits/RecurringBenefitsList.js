import React from 'react'
import RecurringBenefitItem from './RecurringBenefitItem';

const RecurringBenefitsList = () => {
  const months = [
    {
      name: "Enero",
      bees: 120,
      $_per_bee: 500,
      recurring_benefits: [
        {
          name: "Desayuno",
          amount: 12000
        },
        {
          name: "Gimnasio",
          amount: 10000
        },
        {
          name: "Masajes",
          amount: 13000
        }
      ]
    },

    {
      name: "Febrero",
      bees: 120,
      $_per_bee: 500,
      recurring_benefits: [
        {
          name: "Desayuno",
          amount: 12000
        },
        {
          name: "Masajes",
          amount: 13000
        }
      ]
    },
  ]
  return (
    <div>
        <h3>Beneficios Recurrentes</h3>
        {
          months.map(month => {
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