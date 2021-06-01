import React, { useState, useMemo } from "react"
import { View } from "react-native"
import FeatherIcon from "react-native-vector-icons/Feather"

import {
  Container,
  ProductContainer,
  ActionButton,
  ActionContainer,
  Product,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductPriceContainer,
  ProductQuantity,
  ProductSinglePrice,
  ProductTitle,
  ProductTitleContainer,
  SubTotalValue,
  TotalContainer,
  TotalProductsContainer,
  TotalProductsText
} from "./styles"

import formatValue from "../../utils/formatValue"

interface Products {
  id: string
  title: string
  image_url: string
  price: number
  quantity: number
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([
    {
      id: "1",
      title: "Assinatura trimestral",
      image_url:
        "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
      price: 150,
      quantity: 3
    },
    {
      id: "2",
      title: "Assinatura trimestral",
      image_url:
        "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
      price: 150,
      quantity: 3
    }
  ])

  const cartSize = useMemo(() => {
    return products.length || 0
  }, [products])

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      const totaPrice = accumulator + product.price * product.quantity
      return totaPrice
    }, 0)

    return formatValue(cartAmount)
  }, [products])

  const renderItem = ({ item }) => (
    <Product>
      <ProductImage source={{ uri: item.image_url }} />
      <ProductTitleContainer>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPriceContainer>
          <ProductSinglePrice>{formatValue(item.price)}</ProductSinglePrice>
          <TotalContainer>
            <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
            <ProductPrice>
              {formatValue(item.price * item.quantity)}
            </ProductPrice>
          </TotalContainer>
        </ProductPriceContainer>
      </ProductTitleContainer>
      <ActionContainer>
        <ActionButton onPress={() => {}}>
          <FeatherIcon size={16} name="plus" color="#16DB93" />
        </ActionButton>
        <ActionButton onPress={() => {}}>
          <FeatherIcon size={16} name="minus" color="#400406" />
        </ActionButton>
      </ActionContainer>
    </Product>
  )

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item: Products) => item.id}
          renderItem={renderItem}
        ></ProductList>
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>
          {cartSize} {cartSize === 1 ? "item" : "itens"}
        </TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  )
}

export default Cart
