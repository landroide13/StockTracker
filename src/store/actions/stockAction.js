export const addStock = (stock) =>{
  return (dispatch, getState, { getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    firestore.collection('stocks').add({
      ...stock,
      authorFirstName: 'Warren',
      authorLastName: 'Buffet',
      authorId: 1313,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_STOCK', stock})
    }).catch((err) => {
      dispatch({ type: 'ADD_STOCK_ERROR', err})
    });
    
  }
}