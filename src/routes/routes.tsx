import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Catalog from "../pages/Catalog/index"
import Header from "../components/Header/index"
import Cart from "../pages/Cart"
import FeatherIcons from "react-native-vector-icons/Feather"

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#313746" },
      }}
    >
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitle: () => <Header />,
          headerLeftContainerStyle: {
            marginLeft: 20
          },
          headerBackImage: () => (
            <FeatherIcons name="chevron-left" size={24} color="#f3f9ff" />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes
