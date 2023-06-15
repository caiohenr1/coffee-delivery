import { TitleText } from "../../../../components/Typography/Typography"
import { CoffeeCartCard } from "../CoffeeCartCard"
import { Confirmation } from "./Confirmation"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"

export const SelectedCoffes = () => {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
      Cafés selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <Confirmation />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}