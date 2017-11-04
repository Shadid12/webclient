import React, { Component } from 'react';
import axios from 'axios';

export default class Admin extends Component {

	render () {
		return (
			<div>
				<button onClick={ () => {
					//eslint-disable-next-line
					if (confirm('Really bro') ===true ) {
						axios.delete('https://shadid12.herokuapp.com/', {})
						.then(() => {
							 alert("DB is cleaned");
						})
					}else {
						alert("canceled");
					}
				} }>Clean Database</button>
			</div>
		)
	}
}