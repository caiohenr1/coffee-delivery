import { TitleText } from "../../../../components/Typography/Typography"
import { CoffeeCard } from "../CoffeeCard"
import { CoffeeCardContainer } from "../CoffeeCard/styles"
import { CoffeeList, OurCoffeesContainer } from "./style"

export const OurCoffees = () => {
  return (
    <OurCoffeesContainer>
      <TitleText size="l" color="subtitle">
          Nossos Cafés
      </TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  )
}