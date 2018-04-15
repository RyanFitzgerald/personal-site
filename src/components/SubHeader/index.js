import React from 'react';

import Wrapper from './Wrapper';
import H1 from './H1';

function SubHeader({ title, type }) {
  return (
    <Wrapper>
      <H1>{title}</H1>
      <span>{type}</span>
    </Wrapper>
  );
}

export default SubHeader;
