import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Loading from "../components/loading/loading";
import Sales from "../components/sales/sales";
import Dashboard from "../components/dashboard/dashboard";
import Inventory from "../components/inventory/inventory";
import Profit from "../components/profit/profit";
import Login from "../components/login/login";
import SignUp from "../components/signup/signUp";
import BurgerMenu from "../components/burgerMenu/burgerMenu";

const StoreStack = createStackNavigator({ Dashboard, Sales, Inventory });
const SettingsStack = createStackNavigator({ Profit });
const MainNavigator = createDrawerNavigator(
  {
    Stores: StoreStack,
    Settings: SettingsStack
  },
  { contentComponent: BurgerMenu }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "gray"
      },
      headerTintColor: "gold",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center"
      }
    }
  }
);

const RootSwitch = createSwitchNavigator({ Loading, MainNavigator, AuthStack });

export default RootSwitch;
