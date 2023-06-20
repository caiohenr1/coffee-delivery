import { useCart } from "../../hooks/useCart"
import { OurCoffees } from "./components/OurCoffees"
import { Intro } from "./components/intro"
import { HomeContainer } from "./styles"

export const HomePage = () => {
  const { cartItems } = useCart()
  return (
    <HomeContainer className="container">
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}