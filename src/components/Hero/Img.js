import styled from 'styled-components';
import { smallScreen } from '../../variables';

const Img = styled.img`
  margin: -50px 0 -6px;

  @media only screen and (max-width: ${smallScreen}) {
    display: none;
  }
`;

export default Img;