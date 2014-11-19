/** @jsx React.DOM */
'use strict';

var React = require('react');
var $ = require('./bootstrap-multiselect.js').init(
	require('./bootstrap-dropdown.js').init(
		require('jquery')
	)
);
var getOptions = require('./get-options.js');

/* this is our exported React class */
module.exports = React.createClass({
	displayName: 'MultiSelect',
	$multiselect: null,
	options: getOptions(),
  	setOptionsFromProps: function () {
		var currentOptions = {}, needToInit = false, $this = this;
		if ($this.$multiselect) {
			$this.options.forEach(function (option) {
				if ($this.props.hasOwnProperty(option)) {
					currentOptions[option] = $this.props[option];
					needToInit = true;
				}
			});
			if (needToInit) {
				$this.$multiselect.multiselect('setOptions', currentOptions);
			}
		}
	},
	componentDidMount: function () {
		var $this = this;
		// initialize
		$this.$multiselect = $($this.refs.multiselect.getDOMNode());
		$this.$multiselect.multiselect();
		$this.setOptionsFromProps();
		$this.$multiselect.multiselect('dataprovider', $this.props.data || []);
	},
	componentWillUnmount: function () {
		if (this.$multiselect) {
			this.$multiselect.multiselect('destroy');
		}
		this.$multiselect = null;
	},
	render: function () {
		//this.setOptionsFromProps();
		return this.transferPropsTo(
			React.DOM.select({ref: 'multiselect'})
		);
	}
});
