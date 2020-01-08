import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button/Button";
import FancyButton from "../components/FancyButton/FancyButton";

class Home extends Component {
	render() {
		return (
			<div>
				Home
				<Button label="Normal" />
				<FancyButton label="Fancy" />
				<Link to="/nonExistantPage">Custom 404 Page</Link>
			</div>
		);
	}
}

export default Home;
