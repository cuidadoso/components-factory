/**
 * Created by Alejandro on 28.03.2017.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import User from './User';

storiesOf('User', module)
    .add('just component', () => (
      <User/>
    ));
