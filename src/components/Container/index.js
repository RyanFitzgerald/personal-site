import styled from 'styled-components';

const Container = styled.section`
  margin: 0 auto;
  max-width: 1230px;
  padding: 0 15px;
  width: 100%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default Container;