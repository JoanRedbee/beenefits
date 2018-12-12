import React from 'react'
import BenefitsList from '../benefits/BenefitsList'

const Expenses = () => {
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
          name: "Helado",
          amount: 15000
        }
      ]
    },

    {
      name: "Febrero",
      bees: 120,
      $_per_bee: 500,
      recurring_benefits: [
        {
          name: "Futbol",
          amount: 12000
        },
        {
          name: "Paddle",
          amount: 13000
        }
      ]
    },
  ]

  return (
    <div>
      <h3>Gastos</h3>
      <BenefitsList months={months}/>
    </div>
  )
}

export default Expenses
