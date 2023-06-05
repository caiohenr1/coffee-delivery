import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography/Typography";


export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 0;
  text-align: center ;

  img {
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${props => props.theme.colors["brand-yellow-light"]};
    color: ${props => props.theme.colors["brand-yellow-dark"]};
    font-size: ${props => props.theme.textSizes["components-tag"]};
  
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const Name = styled(TitleText).attrs({
  size:'s',
  color: 'subtitle',
  weight: '700'
})`
  margin-bottom: 0%.5rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-top: 0.5rem ;
  margin-bottom: 2rem;
`
