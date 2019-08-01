import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Text, TextInput, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {
    static navigationOptions = {
        title: "NativeProject",
        headerRight:<View />
      }
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
                        <TextInput placeholder="Fist Name" placeholderTextColor="#a9a9a9" style={styles.input}>
                        </TextInput>
                        <TextInput placeholder="Last Name" placeholderTextColor="#a9a9a9" style={styles.input}>
                        </TextInput>
                        <TextInput placeholder="Mobile Number" placeholderTextColor="#a9a9a9" style={styles.input}>
                        </TextInput>
                        <TextInput placeholder="Email Address" placeholderTextColor="#a9a9a9" style={styles.input}>
                        </TextInput>
                        <TextInput placeholder="Password" secureTextEntry placeholderTextColor="#a9a9a9" style={styles.input}>
                        </TextInput>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => alert(" Signup works")} style={styles.button}>
                            <Text style={styles.btnTxt}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.login3}>
                </View>
            </KeyboardAvoidingView>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flex: 1
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1,
        marginTop: 50
    },
    login2: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
        alignItems: 'stretch'

    },
    login3: {
        flex: 0.5
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
        textAlign: 'center',
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
})

