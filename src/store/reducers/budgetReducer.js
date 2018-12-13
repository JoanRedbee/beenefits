const budgetState = {
  '2018': [
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

const budgetReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_BUDGET':
      //console.log(action.year);
      return budgetState
  }
  return state
}

export default budgetReducer