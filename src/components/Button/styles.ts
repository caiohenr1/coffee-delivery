import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.875rem;
  margin-top: 0.7rem ;
  background: ${props => props.theme.colors["brand-yellow"]} ;
  border-radius: 6px;
  border: none;

  color: ${props => props.theme.colors["base-white"]};
  font-weight: 700;
  font-size: ${props => props.theme.textSizes["components-button-g"]};
  line-height: 1.3rem;
  padding: 0.75rem 2.8rem;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme.colors["brand-yellow-dark"]};
  }

  /* &:hover {
    background: ${props => props.theme.colors["brand-yellow-dark"]};
  } */
`