import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

export default class Loading extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 200);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>This is the LoadingScreen.</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
("");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loading: {
    paddingBottom: 20
  }
});
