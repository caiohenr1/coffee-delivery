import { PaymentMethodContainer } from "./styles"
import { ReactNode } from "react"

interface PaymentMethodInputProps {
  icon: ReactNode
  info: string
}
export const PaymentMethodInput = ( { icon, info }: PaymentMethodInputProps) => {
  return (
    <PaymentMethodContainer>
      {icon}{info}
    </PaymentMethodContainer>
  )
}