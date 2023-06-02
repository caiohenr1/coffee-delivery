import { HeaderBaseButton, HeaderButtonsContainer, HeaderContainer } from "./styles"
import coffeeLogo from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogo} alt="Logo Coffee Delivery" />
        <HeaderButtonsContainer  >
            <HeaderBaseButton variant="purple">
              <MapPin size={20} weight="fill" />
              Porto Alegre, RS
            </HeaderBaseButton>
            <HeaderBaseButton variant="yellow">
              <ShoppingCart size={20} weight="fill"/>
            </HeaderBaseButton>
        </HeaderButtonsContainer>
      </div>
  
        
      
    </HeaderContainer>
  )
}