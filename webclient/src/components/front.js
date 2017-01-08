import React from 'react';
import AppBar from 'material-ui/AppBar';
import Test from './button';
import Paper from 'material-ui/Paper';
import Styles from '../css/landing.scss';


export default class Landing extends React.Component {
	render() {
		return (
			
			<div className={Styles.container}>
				<AppBar
					title="Boxhead Clone"
					titleStyle={{fontSize: "50px", textAlign: "center"}}
					showMenuIconButton={false}
					style={{backgroundColor: "#F06292"}}
				/>
				
				<div className={Styles.truedat}>

				
				<img src="http://i.imgur.com/WereBMG.png" alt="box" height={200} width={200}/>


				<div className={Styles.first}>
				
				<Test name="Download" style={{"margin-right": "5%"}}/>
    			<Test name="Start" style={{"margin-left": "5%"}}/></div>
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