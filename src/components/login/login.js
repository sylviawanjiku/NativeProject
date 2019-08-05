import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./styles";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container} behavior="padding">
        <StatusBar backgroundColor="grey" barStyle="light-content" />
        <View style={styles.login}>
          <Text style={styles.welcome}>NativeProject</Text>

          <Image
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
        </View>
        <View style={styles.login2}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#a9a9a9"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Dashboard")}
              style={styles.button}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUp")}
              style={styles.button}
            >
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.login3} />
      </View>
    );
  }
}
