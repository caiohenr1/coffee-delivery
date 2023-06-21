import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedCoffes } from "./components/SelectedCoffees"
import { CompleteOrderContainer } from "./styles"
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const confirmOrderFormValidationSchema = zod.object( {
  cep: zod.string().min(1 , 'Informe o CEP' ),
  street: zod.string().min(1 , 'Informe a rua' ),
  number: zod.string().min(1 , 'Informe o número' ),
  district: zod.string().min(1 , 'Informe o bairro' ),
  city: zod.string().min(1 , 'Informe a cidade' ),
  uf: zod.string().min(1 , 'Informe o estado' ),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
type ConfirmOrderFormData = OrderData;

export const CompleteOrderPage = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>( {
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const {register, handleSubmit} = confirmOrderForm

  function handleConfirmOrder (data: ConfirmOrderFormData) {
    console.log(data);
    
  }
  return(
    <FormProvider {...confirmOrderForm} >
      <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
      <CompleteOrderForm />
      <SelectedCoffes />
    </CompleteOrderContainer>
    </FormProvider>
  )
}