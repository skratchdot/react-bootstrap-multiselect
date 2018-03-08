# react-bootstrap-multiselect

[![NPM version](https://badge.fury.io/js/react-bootstrap-multiselect.svg)](http://badge.fury.io/js/react-bootstrap-multiselect)
[![Build Status](https://travis-ci.org/skratchdot/react-bootstrap-multiselect.svg?branch=master)](https://travis-ci.org/skratchdot/react-bootstrap-multiselect)
[![Code Climate](https://codeclimate.com/github/skratchdot/react-bootstrap-multiselect.png)](https://codeclimate.com/github/skratchdot/react-bootstrap-multiselect)
[![Coverage Status](https://coveralls.io/repos/skratchdot/react-bootstrap-multiselect/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/react-bootstrap-multiselect?branch=master)
[![Dependency Status](https://david-dm.org/skratchdot/react-bootstrap-multiselect.svg)](https://david-dm.org/skratchdot/react-bootstrap-multiselect)
[![devDependency Status](https://david-dm.org/skratchdot/react-bootstrap-multiselect/dev-status.svg)](https://david-dm.org/skratchdot/react-bootstrap-multiselect#info=devDependencies)

[![NPM](https://nodei.co/npm/react-bootstrap-multiselect.png)](https://npmjs.org/package/react-bootstrap-multiselect)

## Description

A multiselect component for react (with bootstrap). This is a react wrapper
around an existing jQuery/bootstrap library (it is not a pure react port):

[bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect)

## Getting Started

1.  Install the peer dependencies:
    `npm install --save jquery bootstrap@3 bootstrap-multiselect react prop-types`

2.  Install the main module:
    `npm install --save react-bootstrap-multiselect`

3.  This is a commonjs library. You will need a tool like browserify/webpack/etc
    to build your code. It is also import you import

```javascript
const React = require('react');
const jQuery = require('jquery');
// this step is important, or else bootstrap will throw an error
window.jQuery = window.$ = jQuery;
// include required js
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap-multiselect/dist/js/bootstrap-multiselect.js');
// include required css
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-multiselect/dist/css/bootstrap-multiselect.css');
// now include the multiselect component
const MultiSelect = require('react-bootstrap-multiselect');

// use the multiselect component
class MyComponent extends React.Component {
  render: function() {
    return <MultiSelect data={[]} />;
  }
};
```

## Documentation

For in depth documentation, see the original
[bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect) project page.

## Links

* [Source Code](https://github.com/skratchdot/react-bootstrap-multiselect)
* [Changelog](https://github.com/skratchdot/react-bootstrap-multiselect/blob/master/CHANGELOG.md)
* [Live Demo](http://projects.skratchdot.com/react-bootstrap-multiselect/)
* [Original Plugin](https://github.com/davidstutz/bootstrap-multiselect)

## Similar React Components

* [react-select](https://jedwatson.github.io/react-select/)
* [react-selectize](https://www.npmjs.com/package/react-selectize)

## License

Copyright (c) 2014 skratchdot  
Uses the original [bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect) license.
