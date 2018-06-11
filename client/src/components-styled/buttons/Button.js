import styled from "styled-components";
import '../globalVars.css';
const Button = styled.button`

  /* Adapt the colours based on color prop */
  background: ${
    props => props.color ?
    'transparent' : 'white'};

  color: ${
    props => props.color ?
    props.color : 'white'};

  border: 2px solid ${
    props => props.color ?
    props.color : 'white'};

  font-size: ${
    props => props.size ?
    '1.15em' : '.9em'};

  border-radius: ${
    props => props.round ?
    '15px' : '3px'};

  border-radius: 3px;
  padding: 0.25em 1em;
  -webkit-tap-highlight-color: rgba(255,255,255,0.4);
  tap-highlight-color: rgba(255,255,255,0.4);
  outline: 0;

`;
export default Button
