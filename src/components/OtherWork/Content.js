import styled from 'styled-components';
import { mainColour, borderColour } from '../../variables';

const Content = styled.a`
  background: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  display: block;
  height: 100%;
  padding: 10px;
  text-decoration: none;
  transition: 0.25s ease all;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

export default Content;