import React, { Component } from 'react';
import {CSVLink} from 'react-csv';

export default class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			csv: [
				['address', 'postal']
			]
		}
		// this.prepare();
	}

	componentWillMount() {
		this.prepare();
	}

	prepare() {
		console.log(this.props.address)
	}

	render() {
		return (
			<div>
				<span> {this.props.name} || </span>
				<CSVLink data={this.props.csv}>Download</CSVLink>
			</div>
		)
	}
} 