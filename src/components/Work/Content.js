import styled from 'styled-components';
import { mainColour, borderColour } from '../../variables';

const Content = styled.a`
  display: block;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  &:after {
    background: rgba(0,0,0,0.3);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.25s ease all;
    width: 100%;
    z-index: 10;
  }

  &:hover {
    &:after {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

export default Content;