import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Landing extends React.Component {
	render() {
		let style = {
			backgroundColor: "#D50000",
		}
		return (
			<div>
				<AppBar
					title="Boxhead Clone"
					style={style}
					showMenuIconButton={false}
					titleStyle={{fontSize: "50px", textAlign: "center", padding: "20px"}}
				/>
			</div>
		);
	}
};