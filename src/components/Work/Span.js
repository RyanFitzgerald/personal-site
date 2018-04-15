import styled from 'styled-components';
import { mainColour } from '../../variables';

const Span = styled.span`
  border: 1px solid #fff;
  border-radius: 15px;
  bottom: 15px;
  color: #fff;
  display: block;
  font-size: 0.8em;
  padding: 5px 15px;
  position: absolute;
  right: 15px;
  transition: 0.25s ease all;
  z-index: 99;

  &:hover {
    background: #fff;
    color: ${mainColour};
  }
`;

export default Span;