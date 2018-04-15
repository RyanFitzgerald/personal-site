import React from 'react';

import Wrapper from './Wrapper';
import Content from './Content';
import SummaryWrapper from './SummaryWrapper';
import H3 from './H3';
import P from './P';
import Img from './Img';
import Span from './Span';

function Work({ title, type, link, image }) {
  return (
    <Wrapper>
      <Content href={link}>
        <SummaryWrapper>
          <P>{type}</P>
          <H3>{title}</H3>
        </SummaryWrapper>
        <Span>View Project</Span>
        <Img src={image} alt={title} />
      </Content>
    </Wrapper>
  );
}

export default Work;