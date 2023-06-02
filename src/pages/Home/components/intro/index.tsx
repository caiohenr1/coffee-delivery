import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles"
import IntroCoffeeDeliveryImg from '../../../../assets/intro.png'
import { RegularText } from "../../../../components/Typography/Typography"
import { InfoIcon } from "../../../../components/InfoIcon"
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from "styled-components"
import { defaultTheme } from "../../../../styles/themes/default"
export const Intro = ( ) => {

  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
          <div>
            <section>
              <IntroTitle  size="xl" >
              Encontre o café perfeito para qualquer hora do dia
              </IntroTitle>
              <RegularText size="l" color="subtitle" as="h3">
                 Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </RegularText>
            </section>
            <BenefitsContainer >
              <InfoIcon
                iconBg={colors["brand-yellow-dark"]}
                icon={ <ShoppingCart weight="fill" />} 
                text='Compra simples e segura'
              />
              <InfoIcon
                iconBg={colors["base-text"]}
                icon={ <Package weight="fill" />} 
                text='Embalagem mantém o café intacto'
              />
              <InfoIcon
                iconBg={colors["brand-yellow"]}
                icon={ <Timer weight="fill" />} 
                text='Entrega rápida e rastreada'
              />
              <InfoIcon
                iconBg={colors["brand-purple"]}
                icon={ <Coffee weight="fill" />} 
                text='O café chega fresquinho até você'
              />
            </BenefitsContainer>
          </div>
          <img src={IntroCoffeeDeliveryImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}