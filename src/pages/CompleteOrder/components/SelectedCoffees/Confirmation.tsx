import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography/Typography"
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"
import { ConfirmationContainer } from "./styles"

const DELIVERY_PRICE = 3.5

export const Confirmation = ( ) => {
  const { cartItemsTotal, cartQuantity } = useCart()
  
  const cartTotalPrice = cartItemsTotal + DELIVERY_PRICE

  const formattedItemsCart = formatMoney(cartItemsTotal)
  const formattedTotalPrice = formatMoney(cartTotalPrice)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationContainer>
      <div>
        <RegularText size="s">
            Total de itens
        </RegularText>
        <RegularText>
            R$ {formattedItemsCart}
        </RegularText>
      </div>
      <div>
        <RegularText size="s">
            Entrega
        </RegularText>
        <RegularText>
            R$ {formattedDeliveryPrice}
        </RegularText>
      </div>
      <div>
        <RegularText size="l" color="subtitle" weight={700}>
            Total
        </RegularText>
        <RegularText size="l" color="subtitle" weight={700}>
            R$ {formattedTotalPrice}
        </RegularText>
      </div>
      <Button text='CONFIRMAR PEDIDO' disabled={cartQuantity <= 0} />
    </ConfirmationContainer>
  )
}