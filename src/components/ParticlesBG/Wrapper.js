import styled from 'styled-components';
import { smallScreen } from '../../variables';

const Wrapper = styled.div`
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  bottom: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (max-width: ${smallScreen}) {
    display: none;
  }
`;

export default Wrapper;