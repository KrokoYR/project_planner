import React from 'react';
import ReactDOM from 'react-dom';

// App and css:
import './index.css';
import { AuthIsLoaded } from './App';

// Service worker:
import * as serviceWorker from './serviceWorker';

// Redux provider:
import {Provider} from 'react-redux'

// Firebase provider:
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";

// Store configuration:
import {createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./store/reducers/root-reducer";
import thunk from "redux-thunk";

// Firebase imports:
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Firebase configuration:
const firebaseConfig = {
	apiKey: "AIzaSyD5eFbrhN5FVRhQSg2dp91qQFWc_tds9lI",
	authDomain: "planner-bbe1b.firebaseapp.com",
	databaseURL: "https://planner-bbe1b.firebaseio.com",
	projectId: "planner-bbe1b",
	storageBucket: "planner-bbe1b.appspot.com",
	messagingSenderId: "930260250094",
	appId: "1:930260250094:web:f2f470567428641256b2ff",
	measurementId: "G-EX78EQR4GS"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();
export {firebase}

// Store configuration:
const store = createStore(rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({
			getFirebase,
			getFirestore
		})),
		reduxFirestore(firebase),
	)
)

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
	attachAuthIsReady: true,
}

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
}

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<AuthIsLoaded/>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
