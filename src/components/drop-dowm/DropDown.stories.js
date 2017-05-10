/**
 * Created by apyreev on 10-May-17.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import { DropDown } from './';

const stories = storiesOf('DropDown', module);

stories.addDecorator(withKnobs);

stories.add('DropDown (default)', () => (
  <DropDown />
));
