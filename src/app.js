import React, { Component } from "react";
import styles from "./styles/main.scss";
import AppRouter from "./routers/AppRouter";
import createStore from "./store/ConfigureStore";
import { Provider } from "react-redux";

const store = createStore();
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);
	}
}

export default App;
