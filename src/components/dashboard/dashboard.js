import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CardContent from "../card/cardContent";

export default class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <CardContent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex: 1
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "white"
  }
});
