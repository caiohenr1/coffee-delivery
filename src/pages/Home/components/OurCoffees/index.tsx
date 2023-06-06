import { TitleText } from "../../../../components/Typography/Typography"
import { coffees } from "../../../../data/coffees"
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
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
    
      </CoffeeList>
    </OurCoffeesContainer>
  )
}