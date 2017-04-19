'use strict';

// setup jQuery
var $;
if (typeof window !== 'undefined' && window && window.jQuery) {
  $ = window.jQuery;
} else {
  $ = require('jquery');
  window.jQuery = $;
}

var BS = require('bootstrap');
var React = require('react');
var createReactClass = require('create-react-class');
var objectAssign = require('object-assign');
var getOptions = require('./get-options.js');
var bsMultiselect = require('./bootstrap-multiselect.js');
var bsDropdown;

// make it play nice when we already have bootstrap dropdown loaded.
if (typeof BS === 'undefined' || typeof BS.dropdown === 'undefined') {
	bsDropdown = require('./bootstrap-dropdown.js');
}
else {
	bsDropdown = BS.dropdown;
}

$ = bsDropdown.init($);
$ = bsMultiselect.init($);

/* this is our exported React class */
module.exports = createReactClass({
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
	getOptionsFromProps: function () {
		var currentOptions = {}, $this = this;
		$this.options.forEach(function (option) {
			if ($this.props.hasOwnProperty(option)) {
				currentOptions[option] = $this.props[option];
			}
		});
		return currentOptions;
	},
	setOptionsFromProps: function () {
		var currentOptions = this.getOptionsFromProps();
		if (this.$multiselect) {
			if (Object.keys(currentOptions).length) {
				this.$multiselect.multiselect('setOptions', currentOptions);
				this.$multiselect.multiselect('buildDropdown');
			}
		}
	},
	componentDidMount: function () {
		var $this = this;
		// initialize
		$this.$multiselect = $($this.refs.multiselect);
		$this.$multiselect.multiselect($this.getOptionsFromProps());
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
		if (nextProps.options !== this.props.options) {
			this.setOptionsFromProps();
		}
		if(nextProps.data !== this.props.data) {
			this.$multiselect.multiselect('dataprovider', nextProps.data || []);
		}
		if (nextProps.disabled) {
			this.$multiselect.multiselect('disable');
		} else {
			this.$multiselect.multiselect('enable');
		}
	},
	render: function () {
		//this.setOptionsFromProps();
		var options = getOptions();
		var props = {};
    for (var key in this.props) {
      if (this.props.hasOwnProperty(key) && options.indexOf(key) === -1) {
        props[key] = this.props[key];
      }
    }
		return React.createElement('select',
			objectAssign({}, props, {ref: 'multiselect'}));
	}
});
