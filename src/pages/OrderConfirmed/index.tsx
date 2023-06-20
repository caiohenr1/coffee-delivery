import { RegularText, TitleText } from "../../components/Typography/Typography"
import { OrderConfirmedContainer, OrderDatailsContainer } from "./styles"
import ConfirmedOrderImg from '../../assets/confirmedOrder.svg'
import { InfoIcon } from "../../components/InfoIcon"
import {MapPin, Clock, CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components"

export const OrderConfirmedPage = () => {
  const { colors } = useTheme()
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
        <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>
      <section>
        <OrderDatailsContainer>
          <InfoIcon 
            icon={<MapPin  weight="fill"/>}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong> 
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />
          <InfoIcon 
            icon={<Clock  weight="fill"/>}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min </strong>
              </RegularText>
            }
          />
          <InfoIcon 
            icon={<CurrencyDollar  weight="fill"/>}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDatailsContainer>

        <img src={ConfirmedOrderImg}  />
      </section>
    </OrderConfirmedContainer>
  )
}