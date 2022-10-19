import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Config from "./pages/Config";

import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function roundToNearestPixel() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="tools" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
