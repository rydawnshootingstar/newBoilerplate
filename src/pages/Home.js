import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button/Button";
import FancyButton from "../components/FancyButton/FancyButton";

import { connect } from "react-redux";
import { setItems, removeItem } from "../actions/Main";

class Home extends Component {
	state = {
		somethingBoolean: false
	};

	setItemsToStuff = ()=> {
		console.log('should be setting items');
		this.props.dispatch(
			setItems([
				{ id: "name", value: "kevin" },
				{ id: "loginEmail", value: "kevin@gmail.com" }
			])
		);
	};

	addToState = ()=> {
		this.setState({
			somethingBoolean: !this.state.somethingBoolean
		});
	}

	removeName = ()=> {
		this.props.dispatch(removeItem({id: 'name'}));
	}

	render() {
		console.log(this.state);
		return (
			<div>
				Home
				<Button onClick={this.setItemsToStuff} label="Normal" />
				<FancyButton onClick={this.addToState} label="Fancy" />
				<Button onClick={this.removeName} label="Remove Name"/>
				<Link to="/nonExistantPage">Custom 404 Page</Link>
			</div>
		);
	}
}

export default connect()(Home);
