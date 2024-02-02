import styled, { keyframes } from 'styled-components';
const buttonAnimation = keyframes`
  0% {
    background-color: crimson;
    color: #fff;
  } 50% {
    background-color: #fff;
    color: crimson
  } 100% {
    background-color: crimson;
    color: #fff;
  }
`;

export const StyledButton = styled.button.attrs({
  type: 'submit',
})`
  padding: 8px 24px;
  background-color: ${(props) =>
    props.variant === 'outline' ? '#fff' : 'crimson'};
  border: 2px solid crimson;
  color: ${(props) => (props.variant === 'outline' ? 'crimson' : '#fff')};
  cursor: pointer;
  font-size: 24px;
  transition: all 0.4s ease-out;
  animation: ${buttonAnimation} 2s infinite;
  &:hover {
    background-color: ${(props) =>
      props.variant === 'outline' ? 'crimson' : '#fff'};
    color: ${(props) => (props.variant === 'outline' ? '#fff' : 'crimson')};
    cursor: pointer;
  }
`;
