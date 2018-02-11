import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

const jQuery = require('jquery');
window.jQuery = window.$ = jQuery;
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap-multiselect/dist/js/bootstrap-multiselect.js');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-multiselect/dist/css/bootstrap-multiselect.css');
import Multiselect from '../src/index';
import exampleData from './example-data';

storiesOf('MultiSelect', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(story => <div style={{ margin: 40 }}>{story()}</div>)
  .addDecorator(withKnobs)
  .add('no optgroups', () => <Multiselect multiple data={exampleData.list} />)
  .add('with optgroups', () => (
    <Multiselect multiple data={exampleData.groups} />
  ))
  .add('single select', () => <Multiselect data={exampleData.groups} />)
  .add('large list (maxHeight/buttonText):', () => (
    <Multiselect
      multiple
      maxHeight={200}
      buttonText={() => 'Long List / Custom Title!'}
      data={exampleData.large}
    />
  ))
  .add('buttonClass', () => (
    <Multiselect
      buttonClass="btn btn-danger"
      multiple
      data={exampleData.list}
    />
  ));
