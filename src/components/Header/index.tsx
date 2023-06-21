import { HeaderBaseButton, HeaderButtonsContainer, HeaderContainer } from "./styles"
import coffeeLogo from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useCart } from "../../hooks/useCart"

export const Header = () => {
  const { cartQuantity  } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
       <NavLink to='/'><img src={coffeeLogo} alt="Logo Coffee Delivery" /></NavLink>
        <HeaderButtonsContainer  >
            <HeaderBaseButton variant="purple">
              <MapPin size={20} weight="fill" />
              Porto Alegre, RS
            </HeaderBaseButton>
            <NavLink to='completeOrder'>
              <HeaderBaseButton variant="yellow">
                {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                <ShoppingCart size={20} weight="fill"/>
              </HeaderBaseButton>
            </NavLink>
        </HeaderButtonsContainer>
      </div>
  
        
      
    </HeaderContainer>
  )
}