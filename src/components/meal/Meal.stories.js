/**
 * Created by Alejandro on 28.03.2017.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Meal from './Meal';

storiesOf('Meal', module)
    .add('just component', () => (
      <Meal/>
    ));
