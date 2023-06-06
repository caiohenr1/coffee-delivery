import { ReactNode } from "react"
import { IconWrapper, QuantityInputContainer } from "./styles"
import { Minus, Plus } from "phosphor-react"


export const QuantityInput = ( ) => {
  return (
    <QuantityInputContainer>
      <IconWrapper>
          <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
          <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}