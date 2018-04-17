import styled from 'styled-components';
import { smallScreen } from '../../variables';

const Wrapper = styled.div`
  float: left;
  max-width: 600px;
  padding: 15px;
  width: 50%;

  @media only screen and (max-width: ${smallScreen}) {
    float: none;
    margin: 0 auto;
    width: 100%;
  }
`;

export default Wrapper;