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
	syncData: function(){
		// this function is meant to be called from parent component
		// in case selected values are changed outside of this component
		// and need to be synced

		// this function can not be called every time on this.render, because
		// dropdown would close after selecting first item

		if(this.$multiselect !== null){
			this.$multiselect.multiselect('dataprovider', this.props.data || []);
		}
	},
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
		if ($this.props.disabled) {
			$this.$multiselect.multiselect('disable');
		}
	},
	componentWillUnmount: function () {
		if (this.$multiselect) {
			this.$multiselect.multiselect('destroy');
		}
		this.$multiselect = null;
	},
	componentWillReceiveProps: function (nextProps) {
		if (nextProps.disabled) {
			this.$multiselect.multiselect('disable');
		} else {
			this.$multiselect.multiselect('enable');
		}
	},
	render: function () {
		//this.setOptionsFromProps();
		return React.createElement('select',
			React.__spread({}, this.props, {ref: 'multiselect'}));
	}
});
