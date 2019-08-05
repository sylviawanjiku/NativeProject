import React, { PureComponent } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { DrawerItems, SafeAreaView, withNavigation } from "react-navigation";

class BurgerMenu extends PureComponent {
  render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <ScrollView style={styles.container}>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          icon={{ name: "md-log-out", type: "ionicon" }}
          title="Log Out"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(BurgerMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    marginHorizontal: 16,
    width: 24
  },
  button: {
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  title: {
    color: "black",
    margin: 16,
    fontSize: 16,
    fontWeight: "500"
  }
});
