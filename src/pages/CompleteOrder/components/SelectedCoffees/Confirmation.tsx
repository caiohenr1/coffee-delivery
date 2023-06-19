import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography/Typography"
import { ConfirmationContainer } from "./styles"

export const Confirmation = ( ) => {
  return (
    <ConfirmationContainer>
      <div>
        <RegularText size="s">
            Total de itens
        </RegularText>
        <RegularText>
            R$ 9,90
        </RegularText>
      </div>
      <div>
        <RegularText size="s">
            Entrega
        </RegularText>
        <RegularText>
            R$ 3,50
        </RegularText>
      </div>
      <div>
        <RegularText size="l" color="subtitle" weight={700}>
            Total
        </RegularText>
        <RegularText size="l" color="subtitle" weight={700}>
            R$ 33,50
        </RegularText>
      </div>
      <Button text='CONFIRMAR PEDIDO' />
    </ConfirmationContainer>
  )
}