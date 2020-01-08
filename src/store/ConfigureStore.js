import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import MainReducer from "../reducers/Main";
import thunk from "redux-thunk";

//dev tools - if they exist
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			//reducers go here
			main: MainReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
