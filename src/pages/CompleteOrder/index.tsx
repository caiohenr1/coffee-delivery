import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedCoffes } from "./components/SelectedCoffees"
import { CompleteOrderContainer } from "./styles"

export const CompleteOrderPage = () => {
  return(
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffes />
    </CompleteOrderContainer>
  )
}