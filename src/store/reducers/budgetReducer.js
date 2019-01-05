const budgetState = {
  months: [
    {
      name: "Enero",
      bees: 120,
      $_per_bee: 500
    },
    {
      name: "Febrero",
      bees: 125,
      $_per_bee: 500
    },
    {
      name: "Marzo",
      bees: 125,
      $_per_bee: 700
    }
  ]
}

function compare(a,b) {
  if (a.order < b.order)
     return -1;
  if (a.order > b.order)
    return 1;
  return 0;
}

const budgetReducer = (state = budgetState, action) => {
  switch (action.type) {
    case 'GET_BUDGET':
      console.log('Getting budget from db');
      return state
    case 'GET_BUDGET_ERROR':
      console.log('Error al pedir budget')
      console.log(action.err)
      return state
    case 'LOAD_BUDGET':
      console.log('Got budget from db')
      action.budget.months.sort(compare)
      return action.budget
    default:
      return state
  }
}

export default budgetReducer