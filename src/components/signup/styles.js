import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1
  },
  login: {
    alignItems: "center",
    marginTop: 50
  },
  login2: {
    alignItems: "stretch"
  },

  login3: {
    // justifyContent: "center",
    marginBottom: 50
  },
  welcome: {
    color: "gold",
    fontSize: 20,
    justifyContent: "flex-end"
  },
  inputContainer: {
    flexDirection: "column",
    width: "90%",
    marginTop: 50,
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
    marginLeft: 15,
    marginBottom: 50
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default styles;
