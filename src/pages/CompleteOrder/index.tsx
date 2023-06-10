import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { CompleteOrderContainer } from "./styles"

export const CompleteOrderPage = () => {
  return(
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
    </CompleteOrderContainer>
  )
}