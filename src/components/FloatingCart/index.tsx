import React from "react"
import {useNavigation} from '@react-navigation/native'
import FeatherIcons from "react-native-vector-icons/Feather"
import {
  CartButtom,
  CartButtomText,
  CartTotalPrice,
  Container,
  CartPricing
} from "./styled"
import formatValue from "../../utils/formatValue"

const FloatingCart: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <CartButtom onPress={() => navigation.navigate('Cart')}>
        <FeatherIcons name="shopping-cart" size={24} color="#f3f9ff" />

        <CartButtomText>2 Itens</CartButtomText>

        <CartPricing>
          <CartTotalPrice>{formatValue(200)}</CartTotalPrice>
        </CartPricing>

        <FeatherIcons name="chevron-right" size={24} color="#f3f9ff" />
      </CartButtom>
    </Container>
  )
}

export default FloatingCart
