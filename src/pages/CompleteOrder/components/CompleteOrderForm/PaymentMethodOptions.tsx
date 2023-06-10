import { Bank, CreditCard, Money } from "phosphor-react"
import { PaymentMethodInput } from "../PaymentMethodInput"
import { PaymentMethodOptionsContainer } from "./styles"

export const PaymentMethodOptions = () => {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput icon={ <CreditCard size={16} />} info='cartão de crédito' />
      <PaymentMethodInput icon={ <Bank size={16} />} info='cartão de débito' />
      <PaymentMethodInput icon={ <Money size={16} />} info='dinheiro' />
      
    </PaymentMethodOptionsContainer>
  )
}