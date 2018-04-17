import styled from 'styled-components';
import { smallScreen } from '../../variables';

const Wrapper = styled.div`
  flex: 1 0 50%;
  padding: 15px;

  @media only screen and (max-width: ${smallScreen}) {
    flex: 1 0 100%;
  }
`;

export default Wrapper;