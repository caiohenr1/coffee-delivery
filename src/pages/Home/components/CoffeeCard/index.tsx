import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"
import { RegularText, TitleText } from "../../../../components/Typography/Typography"
import { QuantityInput } from "../../../../components/QuantityInput"
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from "../../../../utils/formatMoney"
import { useCart } from "../../../../hooks/useCart"
import { useState} from 'react'

export interface Coffee {
  id: number,
  tags: string[];
  name: string;
  description: string
  photo: string
  price: number
}


interface CoffeeProps { 
  coffee: Coffee
}

export const CoffeeCard = ( { coffee }: CoffeeProps ) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease () {
    setQuantity(state => state + 1)
  }
  function handleDecrease () {
    if(quantity > 0) {
      setQuantity(state => state - 1)
    }
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <Tags>
          {coffee.tags.map((tag) => {
            return <span key={`${coffee.id} ${tag}`}>{tag}</span>
          })}
        </Tags>
         <Name>{coffee.name}</Name>
         <Description>
         {coffee.description}
         </Description>
         <CardFooter>
            <div>
              <RegularText size="s">R$</RegularText>
              <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
            </div>
            <AddCartWrapper>
              <QuantityInput 
                onIncrease={handleIncrease} 
                onDecrease={handleDecrease}
                quantity={quantity}
              />
              <button onClick={handleAddToCart}>
                  <ShoppingCart size={22} weight="fill" />
                </button>
            </AddCartWrapper>
         </CardFooter>
         
    </CoffeeCardContainer>
  )
}