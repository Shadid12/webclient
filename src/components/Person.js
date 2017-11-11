import React, { Component } from 'react';
import {CSVLink} from 'react-csv';

export default class Person extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<span>{this.props.value.name}</span> ||
                <span> : {this.props.value.arr.length} || </span>
                <CSVLink data={this.props.data}>Download</CSVLink>
			</div>
		)
	}
} 