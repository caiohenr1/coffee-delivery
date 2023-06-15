
import { Trash } from 'phosphor-react'
import CoffeeImgTeste from '../../../../assets/coffees/tradicional.png'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography/Typography'
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from './styles'

export const CoffeeCartCard = () => {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={CoffeeImgTeste} />
        <div>
          <RegularText color='subtitle'>Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size='small' />
            <RemoveButton>
              <Trash size={16} weight='bold'/>
              REMOVER
            </RemoveButton>
           
          </ActionsContainer>
        </div>
      </div>

      <p>
        R$ 9,90
      </p>
    </CoffeeCartCardContainer>
  )
}