import React, { Component } from "react";
import { View } from "react-native";

export default class Cards extends Component {
  renderCards() {
    return this.props.data.map((item, index) => {
      return <View key={item.id}>{this.props.renderCard(item)}</View>;
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}
