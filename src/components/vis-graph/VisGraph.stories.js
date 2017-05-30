/**
 * Created by apyreev on 30-May-17.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import VisGraph from './Graph';

const stories = storiesOf('VisFraph', module);

stories.addDecorator(withKnobs);

stories.add('graph visualisation', () => (
  <VisGraph />
));
