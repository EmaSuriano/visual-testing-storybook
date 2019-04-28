import React from 'react';
import { storiesOf } from '@storybook/react';
import DuplicationButton from './DuplicationButton';

storiesOf('DuplicationButton', module)
  .add('Good', () => (
    <DuplicationButton>
      <span role="img" aria-label="angel">
        😇
      </span>
    </DuplicationButton>
  ))
  .add('Bad', () => (
    <DuplicationButton>
      <span role="img" aria-label="devil">
        😈
      </span>
    </DuplicationButton>
  ));
