import React from 'react';

import Wrapper from './Wrapper';
import P from './P';
import Button from '../Button';

function BlogPrompt(props) {
  return (
    <Wrapper>
      <P>Have a second? Check out my development blog!</P>
      <Button href="https://blog.ryanfitzgerald.ca/">Visit Blog</Button>
    </Wrapper>
  );
}

export default BlogPrompt;