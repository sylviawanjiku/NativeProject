import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
    flexDirection: "column"
  },
  login: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  login2: {
    justifyContent: "center",
    flex: 1.5,
    alignItems: "stretch"
  },
  login3: {
    flex: 1.5,
    height: 60
  },
  welcome: {
    color: "gold",
    fontSize: 35
  },
  input: {
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 15
  },
  logo: {
    marginTop: 20,
    marginBottom: 50,
    height: 150,
    width: 150
  },
  inputContainer: {
    flexDirection: "column",
    width: "90%",
    marginLeft: 15
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 15,
    width: "45%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 15
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default styles;
