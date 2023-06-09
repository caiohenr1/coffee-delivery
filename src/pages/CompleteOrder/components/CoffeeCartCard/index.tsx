
import { Trash } from 'phosphor-react'
import CoffeeImgTeste from '../../../../assets/coffees/tradicional.png'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography/Typography'
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from './styles'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export const CoffeeCartCard = ( { coffee }: CoffeeCartCardProps ) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color='subtitle'>{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput size='small' 
              quantity={coffee.quantity} 
              onIncrease={handleIncrease} 
              onDecrease={handleDecrease} />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} weight='bold'/>
              REMOVER
            </RemoveButton>
           
          </ActionsContainer>
        </div>
      </div>

      <p>
        R$ {formattedPrice}
      </p>
    </CoffeeCartCardContainer>
  )
}