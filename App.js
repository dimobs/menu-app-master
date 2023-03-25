import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Contact } from "./pages/Contact";
import { HomePage } from "./pages/homepage/homepage";
import { Login } from "./pages/Login";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
          <Menu.Screen name="Home Page" component={HomePage} />
        <Menu.Screen name="Login" component={Login} />
        <Menu.Screen name="Contact" component={Contact} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
