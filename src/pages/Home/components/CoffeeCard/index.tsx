import { CoffeeCardContainer, Description, Name, Tags } from "./styles"
import TradicionalCoffee from '../../../../assets/coffees/tradicional.png'
export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
        <img src={TradicionalCoffee} alt="" />
        <Tags>
          <span>Tradicional</span>
          <span>Com Leite</span>
        </Tags>
         <Name>Expresso Tradicional</Name>
         <Description>
         O tradicional café feito com água quente e grãos moídos
         </Description>
    </CoffeeCardContainer>
  )
}