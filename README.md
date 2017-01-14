# react-bootstrap-multiselect

[![NPM version](https://badge.fury.io/js/react-bootstrap-multiselect.svg)](http://badge.fury.io/js/react-bootstrap-multiselect)
[![Dependency Status](https://david-dm.org/skratchdot/react-bootstrap-multiselect.svg)](https://david-dm.org/skratchdot/react-bootstrap-multiselect)
[![devDependency Status](https://david-dm.org/skratchdot/react-bootstrap-multiselect/dev-status.svg)](https://david-dm.org/skratchdot/react-bootstrap-multiselect#info=devDependencies)


## Description

A multiselect component for react (with bootstrap). This is a react wrapper
around an existing jQuery/bootstrap library (it is not a pure react port):

[bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect)


## Getting Started

1) Install the module with: `npm install --save react-bootstrap-multiselect`

2) Create your module (you need to use something like browserify to build)

```javascript
var React = require('react');
var Multiselect = require('react-bootstrap-multiselect');
var someReactComponent = React.createClass({
    render: function () {
        return (
            <Multiselect />
        );
    }
});
```

3) Include the multi-select CSS in your project somewhere. The CSS file is here:
[bootstrap-multiselect.css](https://raw.githubusercontent.com/davidstutz/bootstrap-multiselect/master/dist/css/bootstrap-multiselect.css)
(don't hotlink- download and host your own copy)

```html
<link rel="stylesheet" href="bootstrap-multiselect.css" type="text/css" />
```

## Supported React Versions

- React 13 users should use [react-bootstrap-multiselect v0.6.0](https://github.com/skratchdot/react-bootstrap-multiselect/tree/v0.6.0)

- React 14 users should use [react-bootstrap-multiselect v1.0.2](https://github.com/skratchdot/react-bootstrap-multiselect/tree/v1.0.2)

- React 15 users should use [react-bootstrap-multiselect v2.x.x](https://github.com/skratchdot/react-bootstrap-multiselect/)


## Note on data synchronization

In case `this.state.myData` changes from outside of multiselect component, values and checkbox state will not update automatically. If you want to sync state, you have to call `.syncData()` on multiselect like in example below.

```javascript

var React = require('react');
var Multiselect = require('react-bootstrap-multiselect');

var someReactComponent = React.createClass({
    getInitialState: function(){
        var that = this;
        $("element").on("event", function(){
            $.get("new-data-from-url", function(newData){
                that.setState(newData);

                // to sync manually do
                that.refs.myRef.syncData();
            });
        });

        return {
            myData : [{value:'One',selected:true},{value:'Two'}]
        };
    },
    render: function () {
        return (
            <Multiselect onChange={this.handleChange} ref="myRef" data={this.state.myData} multiple />
        );
    }
});
```

## Documentation

For in depth documentation, see the original
[bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect) project page.


## Links

- [Source Code](https://github.com/skratchdot/react-bootstrap-multiselect)
- [Changelog](https://github.com/skratchdot/react-bootstrap-multiselect/blob/master/CHANGELOG.md)
- [Live Demo](http://projects.skratchdot.com/react-bootstrap-multiselect/)
- [Original Plugin](https://github.com/davidstutz/bootstrap-multiselect)


## Similar React Components

- [react-select](https://jedwatson.github.io/react-select/)
- [react-selectize](https://www.npmjs.com/package/react-selectize)


## License

Copyright (c) 2014 skratchdot  
Uses the original [bootstrap-multiselect](https://github.com/davidstutz/bootstrap-multiselect) license.
