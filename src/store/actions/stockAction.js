export const addStock = (stock) =>{
  return (dispatch, getState, { getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('stocks').add({
      ...stock,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_STOCK', stock})
    }).catch((err) => {
      dispatch({ type: 'ADD_STOCK_ERROR', err})
    });
    
  }
}