import styled from 'styled-components';
import { mainColour } from '../../variables';

const Tag = styled.span`
  background: ${mainColour};
  color: #fff;
  display: inline-block;
  font-size: 0.75em;
  list-style-type: none;
  margin-right: 5px;
  padding: 5px;
`;

export default Tag;