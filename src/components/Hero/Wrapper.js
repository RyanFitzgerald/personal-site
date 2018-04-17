import styled from 'styled-components';
import { backgroundAlt, smallScreen } from '../../variables';

const Wrapper = styled.div`
  background: ${backgroundAlt};
  overflow: hidden;
  padding: 180px 0 0;
  position: relative;

  @media only screen and (max-width: ${smallScreen}) {
    padding: 100px 0 50px;
  }
`;

export default Wrapper;