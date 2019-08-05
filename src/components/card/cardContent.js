import React, { Component } from "react";
import { Card, Button } from "react-native-elements";
import { StyleSheet, Text } from "react-native";
import Cards from "./card";
import DATA from "./data";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class CardContent extends Component {
  renderCard(item) {
    return (
      <Card
        pointerEvents="none"
        style={styles.card}
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={styles.view}>View Store</Text>

        <TouchableOpacity>
          <Button backgroundColor="#03A9F4" title="More details" />
        </TouchableOpacity>
      </Card>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Cards
          style={styles.cardsContainer}
          data={DATA}
          renderCard={this.renderCard}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardsContainer: {
    alignItems: "stretch"
  },
  view: {
    marginBottom: 10
  }
});
