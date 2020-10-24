import React from 'react';
import { Root } from './styled';
import container from './container';
import Posts from '../Posts'

const Homepage = (props) => {
  return (
    <Root>
      <Posts/>
    </Root>
  );
};

export default container(Homepage);
