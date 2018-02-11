'use strict';

import React, { Component } from 'react';
import $ from 'jquery';
import getOptions from './get-options.js';
import PropTypes from 'prop-types';

export class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.$multiselect = null;
    this.options = getOptions();
  }
  componentDidMount() {
    this.$multiselect.multiselect(this.getOptionsFromProps());
    this.setOptionsFromProps();
    this.$multiselect.multiselect('dataprovider', this.props.data || []);
    if (this.props.disabled) {
      this.$multiselect.multiselect('disable');
    }
  }
  componentWillReceiveProps(nextProps) {
    /*
    if (nextProps.options !== this.props.options) {
      this.setOptionsFromProps();
    }
    */
    if (nextProps.data !== this.props.data) {
      this.$multiselect.multiselect('dataprovider', nextProps.data || []);
    }
    if (nextProps.disabled) {
      this.$multiselect.multiselect('disable');
    } else {
      this.$multiselect.multiselect('enable');
    }
  }
  componentWillUnmount() {
    if (this.$multiselect) {
      this.$multiselect.multiselect('destroy');
    }
    this.$multiselect = null;
  }
  syncData() {
    // this function is meant to be called from parent component
    // in case selected values are changed outside of this component
    // and need to be synced

    // this function can not be called every time on this.render, because
    // dropdown would close after selecting first item

    if (this.$multiselect !== null) {
      this.$multiselect.multiselect('dataprovider', this.props.data || []);
    }
  }
  getOptionsFromProps() {
    const currentOptions = {};
    this.options.forEach(option => {
      if (this.props.hasOwnProperty(option)) {
        currentOptions[option] = this.props[option];
      }
    });
    return currentOptions;
  }
  setOptionsFromProps() {
    const currentOptions = this.getOptionsFromProps();
    if (this.$multiselect) {
      if (Object.keys(currentOptions).length) {
        this.$multiselect.multiselect('setOptions', currentOptions);
        this.$multiselect.multiselect('buildDropdown');
      }
    }
  }
  render() {
    //this.setOptionsFromProps();
    const options = getOptions();
    const props = {};
    for (const key in this.props) {
      if (this.props.hasOwnProperty(key) && options.indexOf(key) === -1) {
        props[key] = this.props[key];
      }
    }
    return (
      <select {...props} ref={select => (this.$multiselect = $(select))} />
    );
  }
}

MultiSelect.propTypes = {
  data: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool
};

export default MultiSelect;
