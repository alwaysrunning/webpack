import React, {Component} from 'react';
import greetText from './greetText.json';
import style from './Greeter.css'

class Greeter extends Component{
	render(){
		return (
			<div className={style.root}>
				{greetText.greetText}
			</div>
		)
	}
}

export default Greeter

