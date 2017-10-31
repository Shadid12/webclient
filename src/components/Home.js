import React, { Component } from 'react';
import axios from 'axios';
import {CSVLink, CSVDownload} from 'react-csv';

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			csvData: [
				['username', 'address', 'postal' ]
			]
		}
	}

	componentDidMount() {
		this._callApi();
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

	handleClick() {
		console.log("yayay");
	}

	render() {
		return (
			<button>
				<CSVLink data={this.state.csvData}>Download Data</CSVLink>
			</button>
		)
	}
}