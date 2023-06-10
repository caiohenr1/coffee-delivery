import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react"
import { TitleText } from "../../../../components/Typography/Typography"
import { SectionTitle } from "../SectionTitle/Index"
import { CompleteOrderFormContainer, FormSectionContainer} from "./styles"
import { useTheme } from "styled-components"
import { AddressForm } from "./AddressForm"
import { PaymentMethodOptions } from "./PaymentMethodOptions"


export const CompleteOrderForm = () => {
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle 
          icon={ <MapPinLine size={22} color={colors["brand-yellow-dark"]} />} 
          title='Endereço de Entrega' 
          subtitle="Informe o endereço onde deseja receber seu pedido" 
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
      <SectionTitle 
          icon={ <CurrencyDollar size={22} color={colors["brand-purple"]} />} 
          title='Pagamento' 
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar" 
        />
       <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}