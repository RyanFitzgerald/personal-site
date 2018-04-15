import React from 'react';

import Wrapper from './Wrapper';
import Content from './Content';
import H3 from './H3';
import P from './P';
import Tag from './Tag';

function OtherWork({ link, name, description, tags }) {
  return (
    <Wrapper>
      <Content href={link}>
        <H3>{name}</H3>
        <P>{description}</P>
        {tags.map((name, index) =>
          <Tag key={index}>{name}</Tag>
        )}
      </Content>
    </Wrapper>
  );
}

export default OtherWork;