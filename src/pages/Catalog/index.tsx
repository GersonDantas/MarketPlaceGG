import React, { useState } from "react"
import { View } from "react-native"
import FeatherIcon from "react-native-vector-icons/Feather"
import formatValue from "../../utils/formatValue"
import FloatingCart from "../../components/FloatingCart/index"

import {
  Container,
  ProductContainer,
  ProductFlatList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButtom,
  ProductButtomText
} from "./styles"

interface Products {
  id: string
  title: string
  image_url: string
  price: number
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([
    {
      id: "1",
      title: "Assinatura trimestral",
      image_url:
        "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
      price: 150
    },
  ])

  const renderItem = ({ item }) => (
    <Product>
      <ProductImage source={{ uri: item.image_url }} />
      <ProductTitle>{item.title}</ProductTitle>
      <PriceContainer>
        <ProductPrice>{formatValue(item.price)}</ProductPrice>
        <ProductButtom onPress={() => {}}>
          <ProductButtomText>Adicionar</ProductButtomText>
          <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
        </ProductButtom>
      </PriceContainer>
    </Product>
  )


  return (
    <Container>
      <ProductContainer>
        <ProductFlatList
          data={products}
          keyExtractor={(item: Products) => item.id}
          renderItem={renderItem}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 70
          }}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  )
}

export default App
