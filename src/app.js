import React, { Component } from "react";
import styles from "./styles/main.scss";
import AppRouter from "./routers/AppRouter";

class App extends Component {
	render() {
		return (
			<div>
				<AppRouter />
			</div>
		);
	}
}

export default App;
