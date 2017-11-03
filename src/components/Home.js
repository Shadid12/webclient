import React, { Component } from 'react';
import axios from 'axios';
import {CSVLink, CSVDownload} from 'react-csv';
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
			for (var val of res.data) {
				var obj = {
					name: val._id,
					arr: [['postal', 'address']]
				}
				for ( var i = 0; i < val.postal.length; i++ ) {
					var s = [];
					s.push(val.postal[i]);
					s.push(val.address[i]);
					obj.arr.push(s);
				}
				this.setState({data: [...this.state.data, obj] });
			}
			console.log(this.state.data);
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
				<ul>
					{
						this.state.data.map((data) => {
							return(
								<li key={data.name}><Person name={data.name} csv={data.arr} /></li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}