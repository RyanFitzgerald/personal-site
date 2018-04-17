import styled from 'styled-components';
import { smallScreen } from '../../variables';

const Column = styled.div`
  float: left;
  padding: 0 15px;
  position: relative;
  width: 50%;

  @media only screen and (max-width: ${smallScreen}) {
    float: none;
    width: 100%;
  }
`;

export default Column;