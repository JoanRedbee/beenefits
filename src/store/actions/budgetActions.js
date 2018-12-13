export const getBudget = (year) => {
  return (dispatch, getState) => {
    //Async call to db
    setTimeout(() => {
      dispatch({
        type: 'GET_BUDGET',
        year
      })
    }, 2000)
  }
};