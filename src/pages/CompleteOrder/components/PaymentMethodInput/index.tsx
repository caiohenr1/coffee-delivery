import { input } from "zod"
import { PaymentMethodContainer, ContentContainer } from "./styles"
import { InputHTMLAttributes, ReactNode, forwardRef } from "react"


type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>((
    { label, icon, id, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
    <label htmlFor={id}>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
    </label>
  </PaymentMethodContainer>
  )
})