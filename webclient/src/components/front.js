
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Test from './button';
import Paper from 'material-ui/Paper';
import Styles from '../css/landing.scss';
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


export default class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			inQueue: false
		};
		this.handleStart = this.handleStart.bind(this);
		this.handleDownload = this.handleDownload.bind(this);
	}
    getChildContext() {
	    return { muiTheme: getMuiTheme(baseTheme) };
	}
	handleStart() {
		this.setState(prevState => ({
			inQueue: !prevState.inQueue
		}));
		// go in queue
	}
	handleDownload() {
		var newTab = window.open("http://google.ca", "_blank");
		newTab.focus();
	}
	render() {
		let queueMessage = null;
		let queueSpinningThing = null;
		let startMsg = "Start";
		let showDL = this.state.inQueue ? {"margin-right": "5%", "display": "none"} : {"margin-right": "5%"};
		if (this.state.inQueue) {
			queueMessage = <p style={{fontSize: "40px", marginBottom: "50px", marginTop: "0px"}}> You're in queue </p>;
			queueSpinningThing = <CircularProgress size={60} thickness={7} className={Styles.queue} color={"#D50000"}/>;
			startMsg = "Cancel";
		}
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
						<Test name="Download" style={showDL} onClick={this.handleDownload}/>
		    			<Test name={startMsg} style={{"margin-left": "5%"}}  onClick={this.handleStart} href={null}/>
		    		</div>
		    		{queueMessage}
		    		{queueSpinningThing}
 				</div>
 				<Paper className={Styles.instructions}>
 					<p>Herein lies a clone of the world renowned game of Boxhead.</p>

 					<p>Do what you will, but remember, the arrow keys are your move buttons, and spacebar is shoot.</p>

 					<p>Download the game, and press 'Start' to queue up and find an opponent to play against.</p>
 				</Paper>
			</div>	
		);
	}
};

Landing.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};