import styled from 'styled-components';
import { mainColour, borderColour } from '../../variables';

const Content = styled.a`
  background: #fff;
  border: 1px solid ${borderColour};
  display: block;
  padding: 10px;
  text-decoration: none;
  transition: 0.25s ease all;

  &:hover {
    border-color: ${mainColour};
  }
`;

export default Content;