import { RegularText, TitleText } from "../../components/Typography/Typography"
import { OrderConfirmedContainer, OrderDatailsContainer } from "./styles"
import ConfirmedOrderImg from '../../assets/confirmedOrder.svg'
import { InfoIcon } from "../../components/InfoIcon"
import {MapPin, Clock, CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../CompleteOrder"
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions"
import { useEffect } from "react"


interface LocationType {
  state: OrderData;
}

export const OrderConfirmedPage = () => {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();


  useEffect(() => {
    if(!state) {
      navigate("/")
    }
  } ,[])

  if(!state) return <></>
  
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
                Entrega em <strong>{state.street}, {state.number},</strong> 
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label.toUpperCase()}</strong>
              </RegularText>
            }
          />
        </OrderDatailsContainer>

        <img src={ConfirmedOrderImg}  />
      </section>
    </OrderConfirmedContainer>
  )
}