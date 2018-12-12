import React from 'react'
import BenefitsList from '../benefits/BenefitsList'


const RecurringBenefits = () => {
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
      <BenefitsList months={months}/>
    </div>
  )
}

export default RecurringBenefits
