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
				['username', 'address', 'pin' ]
			],
            users: []
		};
		this._callApi();
		this._callApiByUsers();

	}

	_callApiByUsers() {
		axios.get('http://shadid12.herokuapp.com/index')
		.then((res) => {
			this.setState({users: res.data});
		});
	}

	_callApi() {
		axios.get('http://shadid12.herokuapp.com/plain')
		.then((res) => {
			// this.setState({data: res.data});
			for (let value of res.data){
				let arr = [];
				arr.push(value.username);
				arr.push(value.address);
				arr.push(value.pin);
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
				<CSVLink data={this.state.csvData}>Download</CSVLink>
                <br />
                <ul>
                    {
                        this.state.users.map( (user) => {
                            let data = [ ['address', 'pin' ] ];
                            for (let value of user.arr){
                                let arr = [];
                                arr.push(value.address);
                                arr.push(value.pin);
                                data = [...data, arr];
                            }
                            return (
                                <Person key={user.name} value={user} data={data}/>
                            )
                        })
                    }
                </ul>
			</div>
		)
	}
}