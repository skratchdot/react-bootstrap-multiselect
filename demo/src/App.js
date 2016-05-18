'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var BS = require('react-bootstrap');
var Header = require('./Header');
var Multiselect = require('../../lib/index.js');
var fileContent = require('./AppContent').content;

var App = React.createClass({
	getInitialState: function () {
		var large = [];
		for (var i = 0; i < 100; i++) {
			large.push({value: 'Item ' + i});
		}
		return {
			groups: [
				{label:'Group One',children:[{value:'1-One'},{value:'1-Two'},{value:'1-Three'},{value:'1-Four',label:'Four Label'}]},
				{label:'Group Two',children:[{value:'2-One'},{value:'2-Two'},{value:'2-Three'},{value:'2-Four',label:'Four Label'}]},
				{label:'Group Three',children:[{value:'3-One'},{value:'3-Two'},{value:'3-Three'},{value:'3-Four',label:'Four Label'}]}
			],
			large: large,
			list: [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]
		};
	},
	render: function () {
		return (
			<BS.Grid>
				<Header />
				<BS.Row>
					<BS.Col md={3}>
						<h2>Demo:</h2>
						<h4>no optgroups:</h4>
						<Multiselect data={this.state.list} multiple />
						<h4>with optgroups:</h4>
						<Multiselect data={this.state.groups} multiple />
						<h4>single select:</h4>
						<Multiselect data={this.state.groups} />
						<h4>large list (maxHeight/buttonText):</h4>
						<Multiselect data={this.state.large} multiple
							maxHeight={200}
							buttonText={function(options, select) {
								return 'Long List / Custom Title!';
							}}
						/>
						<h4>buttonClass:</h4>
						<Multiselect buttonClass="btn btn-danger" data={this.state.list} multiple />
					</BS.Col>
					<BS.Col md={9}>
						<h2>Demo Source Code:</h2>
						<textarea className="form-control" style={{width:'100%',height:'500px'}} readOnly value={fileContent} />
					</BS.Col>
				</BS.Row>
			</BS.Grid>
		);
	}
});

// init our demo app
ReactDOM.render(<App />, document.getElementById('app'));
