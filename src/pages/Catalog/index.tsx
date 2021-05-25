import React, { useState } from "react"
import {
  Container,
  ProductContainer,
  ProductFlatList,
  Product,
  ProductImage,
  ProductText,
  PriceContainer,
  ProductPrice,
  ProductButtom,
  ProductButtomText
} from "./styles"

const App: React.FC = () => {
  const [products, setProducts] = useState({
    id: '1',
    title: 'Assinatura trimestral',
    image_url: '',
    price: 150,
  })

  return (
    <Container>
      <ProductContainer>
        <ProductFlatList data={products}  keyExtractor={(item) => item.id} />
      </ProductContainer>
    </Container>
  )
}

export default App
