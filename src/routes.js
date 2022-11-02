import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Config from "./pages/Config";
import RegisterStudent from "./pages/RegisterStudent";
import RegisterTeacher from "./pages/RegisterTeacher";
import RegisterDiscipline from "./pages/RegisterDiscipline";
import RegisterClass from "./pages/RegisterClass";
import RegisterHistoric from "./pages/RegisterHistoric";

import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function roundToNearestPixel() {
  return (
    <NavigationContainer independent={true}>
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
        <Tab.Screen
          name="RegisterStudent"
          component={RegisterStudent}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="RegisterTeacher"
          component={RegisterTeacher}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="RegisterDiscipline"
          component={RegisterDiscipline}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="RegisterClass"
          component={RegisterClass}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="RegisterHistoric"
          component={RegisterHistoric}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
