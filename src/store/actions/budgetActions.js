export const getBudget = (year) => {
  return (dispatch, getState) => {
    //Async call to db
    dispatch({
      type: 'GET_BUDGET',
      year
    })
  }
};