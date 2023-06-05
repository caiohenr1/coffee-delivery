import { OurCoffees } from "./components/OurCoffees"
import { Intro } from "./components/intro"
import { HomeContainer } from "./styles"

export const HomePage = () => {
  return (
    <HomeContainer className="container">
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}