import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import {
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../../redux/actionCreator/registrationAction";

class SignUp extends Component {
  static propTypes = {
    registerUser: PropTypes.shape({}).isRequired,
    results: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired
  };

  static navigationOptions = {
    title: "NativeProject",
    headerRight: <View />
  };

  constructor(props) {
    super(props);
    this.state = {
      openLogin: false,
      values: {
        username: "",
        email: "",
        password: ""
      },
      errors: {}
    };
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {};

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  onSubmitEditing = () => {
    console.log(this.state);
    // const { registerUser } = this.props
    const {
      results,
      navigation: { navigate }
    } = this.props;
    // const values = this.state;
    // registerUser(values);
    results({ ...this.state, navigate });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar backgroundColor="grey" barStyle="light-content" />
        <View style={styles.login}>
          <Text style={styles.welcome}>
            Create a new account in NativeProject
          </Text>
        </View>
        <View style={styles.login2}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#a9a9a9"
              style={styles.input}
              onChangeText={text => this.handleChange("username", text)}
            />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#a9a9a9"
              style={styles.input}
              onChangeText={text => this.handleChange("email", text)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="#a9a9a9"
              style={styles.input}
              onChangeText={text => this.handleChange("password", text)}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => this.onSubmitEditing()}
              style={styles.button}
            >
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.login3} />
      </KeyboardAvoidingView>
    );
  }
}
// SignUp.defaultProps = {
//     registerUser: {},
//     errors: {}
// };

const mapStateToProps = state => ({
  registerUser: state.registerUser
});

const mapDispatchToProps = { results: registerUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
