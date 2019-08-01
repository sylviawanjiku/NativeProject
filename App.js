import React from 'react';
import Login from './src/components/login';
import SignUp from './src/components/signUp';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <Container />
    );
  }
}
const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    initialRouteName:"Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:"gray"
      },
      headerTintColor: "gold",
      headerTitleStyle: {
        flex:1,
        textAlign:"center"
      }
    }
  },
  
);

const Container = createAppContainer(RootStack);

