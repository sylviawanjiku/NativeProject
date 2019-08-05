import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    marginTop: 50
  },
  login2: {
    justifyContent: "center",
    flex: 3,
    alignItems: "stretch"
  },
  login3: {
    flex: 0.8
  },
  welcome: {
    color: "gold",
    fontSize: 20,
    justifyContent: "flex-end"
  },
  inputContainer: {
    flexDirection: "column",
    width: "90%",
    marginLeft: 15
  },
  input: {
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 15
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 15,
    width: "45%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginLeft: 15
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default styles;
