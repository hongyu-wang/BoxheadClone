import React from 'react';
import AppBar from 'material-ui/AppBar';
import Test from './button';
import Paper from 'material-ui/Paper';
import Styles from '../css/landing.scss';
import CircularProgress from 'material-ui/CircularProgress'

export default class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };
	}
	render() {
		return (
			<div className={Styles.container}>
				<AppBar
					title="Boxhead Clone"
					style={{backgroundColor: "#D50000"}}
					showMenuIconButton={false}
					titleStyle={{fontSize: "50px", textAlign: "center", padding: "20px"}}
				/>
				<div className={Styles.truedat}>
					<img src="http://i.imgur.com/WereBMG.png" alt="box" className={Styles.image}/>
					<div className={Styles.first}>
						<Test name="Download" style={{"margin-right": "5%"}}/>
		    			<Test name="Start" style={{"margin-left": "5%"}}/>
		    		</div>
		    		<p style={{fontSize: "40px", marginBottom: "50px", marginTop: "0px"}}> You're in queue </p>
		    		<CircularProgress size={60} thickness={7} className={Styles.queue}/>
 				</div>
 				<Paper className={Styles.instructions}>
 					<p>Herein lies a clone of the world renowned game of Boxhead.</p>

 					<p>Do what you will, but remember, WASD are your move buttons, and spacebar is shoot.</p>

 					<p>Download the game, and press 'Start' to queue up and find an opponent to play against.</p>
 				</Paper>

			</div>	
		);
	}
};