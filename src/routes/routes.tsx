import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Catalog from "../pages/Catalog/index"
import Header from '../components/Header/index'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#313746" }
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
    </Stack.Navigator>
  )
}

export default Routes
