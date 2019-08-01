import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, StatusBar, TouchableOpacity, Image } from 'react-native';

export default class Login extends Component  {
    static navigationOptions = {
        header: null
      }
    render() {
        return (
            <View style={styles.container} behavior="padding">
                <StatusBar backgroundColor="grey" barStyle="light-content" />
                <View style={styles.login}>
                    <Text style={styles.welcome}>
                        NativeProject
                </Text>

                    <Image style={styles.logo} source={require('./../images/logo.png')} />
                </View>
                <View style={styles.login2}  >
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Email Address" placeholderTextColor="#a9a9a9" style={styles.input}>
                        </TextInput>
                        <TextInput placeholder="Password" placeholderTextColor="#a9a9a9" secureTextEntry style={styles.input}>
                        </TextInput>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => alert(" Login works")} style={styles.button}>
                            <Text style={styles.btnTxt}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={styles.button}>
                            <Text style={styles.btnTxt}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.login3}>
                </View>
            </View>


        );

    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flex: 1,
        flexDirection: "column"
    },
    login: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    login2: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1.5,
        alignItems: 'stretch'

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
        borderColor: "gold",
        color: "gold",
        marginBottom: 10,
        textAlign: 'center',
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
})

