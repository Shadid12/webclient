import React, { Component } from 'react';
import axios from 'axios';
import {CSVLink, CSVDownload} from 'react-csv';
import Confirm from 'react-confirm-bootstrap';
import Person from './Person';

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			csvData: [
				['username', 'address', 'postal' ]
			]
		}
		this._callApiByUsers();

	}

	_callApiByUsers() {
		axios.get('http://shadid12.herokuapp.com/index')
		.then((res) => {
			this.setState({data: res});
			console.log(res.data);
		});
	}

	_callApi() {
		axios.get('http://shadid12.herokuapp.com/plain')
		.then((res) => {
			// this.setState({data: res.data});
			for (var value of res.data){
				var arr = [];
				arr.push(value.username);
				arr.push(value.address);
				arr.push(value.postal);
				this.setState({ csvData: [...this.state.csvData, arr] });
			}
		});
	}

	onConfirm() {
       console.log('suck it');
    }

	render() {
		return (
			<div>
				<CSVLink data={this.state.csvData}>Download One CSV</CSVLink>
				<ul>
					
				</ul>
			</div>
		)
	}
}