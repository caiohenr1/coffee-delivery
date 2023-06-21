import { TitleText } from "../../../../components/Typography/Typography"
import { useCart } from "../../../../hooks/useCart"
import { CoffeeCartCard } from "../CoffeeCartCard"
import { Confirmation } from "./Confirmation"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"

export const SelectedCoffes = () => {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
      Cafés selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => {
          return <CoffeeCartCard key={item.id} coffee={item} />
        })}
        <Confirmation />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}