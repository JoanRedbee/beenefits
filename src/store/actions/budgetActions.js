export const getBudget = (year) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: 'GET_BUDGET',
      year
    })
    //Async call to db
    const firestore = getFirestore()
    //firestore.collection('budget').doc(year.toString()).collection('q4').get().then((data) => {
    firestore.collection('recurring_benefits').get().then((data) => {
      console.log("Data de DB:");
      console.log(data.docs.map(doc => doc.data()));
      /*
      dispatch({
        type: 'LOAD_BUDGET',
        budget: {
          months: data.docs.map(doc => doc.data())
        }
      })
      */
    }).catch(err => {
      dispatch({
        type: 'GET_BUDGET_ERROR',
        err
      })
    })
  }
};