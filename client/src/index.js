import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer.js';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, creatFirestoreInstance  } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from './config/firebase.js';

const enhancers = [reduxFirestore(firebase), applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))]

const store = createStore(rootReducer, compose(...enhancers))

const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	creatFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<ReactReduxFirebaseProvider {...rrfProps}>
  			<App />
  		</ReactReduxFirebaseProvider>
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
