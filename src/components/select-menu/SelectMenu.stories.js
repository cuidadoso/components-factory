/**
 * Created by apyreev on 10-May-17.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import { SelectMenu } from './';

const stories = storiesOf('SelectMenu', module);

stories.addDecorator(withKnobs);

const options = [
    { value: 10, label: 'Ten' },
    { value: 11, label: 'Eleven' },
    { value: 12, label: 'Twelve' },
    { value: 23, label: 'Twenty-three' },
    { value: 24, label: 'Twenty-four' }
];

stories.add('Select menu (default)', () => (
  <SelectMenu options={options}/>
));
