import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;
  width: 100%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default Container;