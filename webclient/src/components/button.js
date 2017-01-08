import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {

	}
	render() {
		return (
			<RaisedButton 
				label={this.props.name} 
				labelStyle={{fontSize: "20px"}} 
				buttonStyle={{height: "50px", width: "200px"}} 
				style={this.props.style} 
				onClick={this.props.onClick}
			/>
		);
	}
};