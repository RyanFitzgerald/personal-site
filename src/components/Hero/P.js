import styled from 'styled-components';
import { textColour, mainColour } from '../../variables';

const P = styled.p`
  color: ${textColour};
  font-size: 1.2em;
  margin: 15px 0 20px;

  a {
    border-bottom: 2px solid ${mainColour};
    color: ${textColour};
    padding: 0 2px;
    text-decoration: none;
    transition: 0.25s ease background;

    &:hover {
      background: ${mainColour};
      color: #fff;
    }
  }
`;

export default P;