import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


import authReducer from './authReducer';
import stockReducer from './stockReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  stock: stockReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;
