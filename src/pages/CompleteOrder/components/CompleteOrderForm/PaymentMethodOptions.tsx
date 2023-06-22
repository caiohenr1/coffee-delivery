import { Bank, CreditCard, Money } from "phosphor-react"
import { PaymentMethodInput } from "../PaymentMethodInput"
import { PaymentMethodOptionsContainer } from "./styles"
import { useFormContext } from 'react-hook-form'
import { RegularText } from "../../../../components/Typography/Typography"


export const paymentMethods = {
  credit: {
    label: 'cartão de crédito',
    icon:<CreditCard size={16} />
  },
  debit: {
    label: 'cartão de débito',
    icon:<Bank size={16} />
  },
  money: {
    label: 'dinheiro',
    icon:<Money size={16} />
  }
}

export const PaymentMethodOptions = () => {
  const { register, formState: { errors} } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key , {label, icon}]) => {
        return <PaymentMethodInput 
          icon={icon} 
          label={label} 
          key={label}
          value={key}
          id={key}
          {...register('paymentMethod')}
         />
      })}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}