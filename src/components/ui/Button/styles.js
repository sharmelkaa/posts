import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: white;
  background: #3e81f5;
  box-shadow: 0 5px 0 #1a4cc0;
  padding: 5px 15px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background: ${(props) => props.dangerous ? 'red' : '#003CC5'};
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`