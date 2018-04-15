import styled from 'styled-components';
import { mainColour, borderColour, textColour } from '../../variables';

const Project = styled.article`
  margin: 0 auto;
  max-width: 800px;
  padding: 50px 45px;

  a {
    border-bottom: 2px solid ${mainColour};
    color: ${textColour};
    padding: 0 2px;
    text-decoration: none;
    transition: 0.25s ease all;

    &:hover {
      background: ${mainColour};
      color: #fff;
    }
  }

  img {
    border: 2px solid ${borderColour};
    display: block;
    padding: 5px;
  }
`;

export default Project;