import styled from 'styled-components';
import { mainColour, mainColourHover } from '../../variables';

const Button = styled.a`
  background: ${mainColour};
  border-radius: 25px;
  color: #fff;
  display: inline-block;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-right: 10px;  
  padding: 10px 30px;
  text-decoration: none;
  transition: 0.5s ease background;

  &:hover {
    background: ${mainColourHover};
  }
`;

export default Button;