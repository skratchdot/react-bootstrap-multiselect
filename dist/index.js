'use strict';

// setup jQuery

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $;
if (typeof window !== 'undefined' && window && window.jQuery) {
	$ = window.jQuery;
} else {
	$ = require('jquery');
	window.jQuery = $;
}

var BS = require('bootstrap');
var React = require('react');
var objectAssign = require('object-assign');
var getOptions = require('./get-options.js');
var bsMultiselect = require('./bootstrap-multiselect.js');
var bsDropdown;

// make it play nice when we already have bootstrap dropdown loaded.
if (typeof BS === 'undefined' || typeof BS.dropdown === 'undefined') {
	bsDropdown = require('./bootstrap-dropdown.js');
} else {
	bsDropdown = BS.dropdown;
}

$ = bsDropdown.init($);
$ = bsMultiselect.init($);

/* this is our exported React class */

var MultiSelect = function (_React$Component) {
	_inherits(MultiSelect, _React$Component);

	function MultiSelect(props) {
		_classCallCheck(this, MultiSelect);

		var _this = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, props));

		_this.$multiselect = null;
		_this.options = getOptions();
		return _this;
	}

	_createClass(MultiSelect, [{
		key: 'syncData',
		value: function syncData() {
			// this function is meant to be called from parent component
			// in case selected values are changed outside of this component
			// and need to be synced

			// this function can not be called every time on this.render, because
			// dropdown would close after selecting first item

			if (this.$multiselect !== null) {
				this.$multiselect.multiselect('dataprovider', this.props.data || []);
			}
		}
	}, {
		key: 'getOptionsFromProps',
		value: function getOptionsFromProps() {
			var currentOptions = {},
			    $this = this;
			$this.options.forEach(function (option) {
				if ($this.props.hasOwnProperty(option)) {
					currentOptions[option] = $this.props[option];
				}
			});
			return currentOptions;
		}
	}, {
		key: 'setOptionsFromProps',
		value: function setOptionsFromProps() {
			var currentOptions = this.getOptionsFromProps();
			if (this.$multiselect) {
				if (Object.keys(currentOptions).length) {
					this.$multiselect.multiselect('setOptions', currentOptions);
					this.$multiselect.multiselect('buildDropdown');
				}
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var $this = this;
			// initialize
			$this.$multiselect = $($this.selectRef);
			$this.$multiselect.multiselect($this.getOptionsFromProps());
			$this.setOptionsFromProps();
			$this.$multiselect.multiselect('dataprovider', $this.props.data || []);
			if ($this.props.disabled) {
				$this.$multiselect.multiselect('disable');
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.$multiselect) {
				this.$multiselect.multiselect('destroy');
			}
			this.$multiselect = null;
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setOptionsFromProps();
			}
			if (nextProps.data !== this.props.data) {
				this.$multiselect.multiselect('dataprovider', nextProps.data || []);
			}
			if (nextProps.disabled) {
				this.$multiselect.multiselect('disable');
			} else {
				this.$multiselect.multiselect('enable');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			//this.setOptionsFromProps();
			var options = getOptions();
			var props = {};
			for (var key in this.props) {
				if (this.props.hasOwnProperty(key) && options.indexOf(key) === -1) {
					props[key] = this.props[key];
				}
			}
			return React.createElement('select', objectAssign({}, props, {
				ref: function ref(select) {
					return _this2.selectRef = select;
				}
			}));
		}
	}]);

	return MultiSelect;
}(React.Component);

MultiSelect.displayName = 'MultiSelect';

module.exports = MultiSelect;