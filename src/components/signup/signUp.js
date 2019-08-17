import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import {
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../../redux/actionCreator/registrationAction";

class SignUp extends Component {
  static propTypes = {
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

  componentDidMount(nextProps) {
   
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'StoreStack' : 'AuthStack');
   };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  onSubmitEditing = () => {
    const {
      results,
      navigation: { navigate }
    } = this.props;
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
          
          
        </View>
        <View style={styles.login3}> 
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => this.onSubmitEditing()}
              style={styles.button}
            >
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
          </View>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  let errors;
  console.log(errors,"nextProps");
  if (state.registerUser) {
    errors = state.registration.errors;
  }return{
    errors: errors,
    registration: state.registration
  }
 
};
registerUser.defaultProps = { errors: {} };

const mapDispatchToProps = {
  results: registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

// export const mapStateToProps = state => {
//   let errors;
//   if (state.signup) {
//     errors = state.signup.errors;
//   }
//   return {
//     errors: errors,
//     signup: state.signup,
//     success: state.signup.success
//   };
// };
// SignUp.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired,
//   success: PropTypes.object.isRequired
// };

