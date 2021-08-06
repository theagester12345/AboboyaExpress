/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";

// import components
import Button from "../src/components/buttons/Button";
//import LinkButton from './src/components/buttons/LinkButton';
//import Logo from './src/components/logo/Logo';

// import colors
import Colors from "../theme/colors";

// WelcomeA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerImage: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsGroup: {
    flex: 3,
    alignItems: "center",
    paddingHorizontal: 32,
    width: "100%",
  },
  loginButton: {
    //paddingHorizontal: 72,
    width: "50%",
  },
  vspace16: {
    height: 16,
  },
  vspace32: {
    height: 32,
  },
  linkButtonText: {
    color: Colors.onSurface,
    textAlign: "center",
  },
  forgotPasswordText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#00d014",
    textAlign: "center",
  },
});

const WelcomePage = ({ navigation }) => {
  // navigateTo = screen => () => {
  //     const {navigation} = this.props;
  //     navigation.navigate(screen);
  //   };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar
        backgroundColor={Colors.statusBarColor}
        barStyle="dark-content"
      />

      <View style={styles.loginButton}>
        <Button
          title={"Log in".toUpperCase()}
          onPress={() => navigation.replace("SignIn")}
        />
      </View>

      <View style={styles.logoContainer}>
        {/* <Logo size={112} tintColor={Colors.primaryColor} /> */}
        <Image
          style={styles.headerImage}
          source={require("../src/assets/aboboyalogo.png")}
        />
      </View>

      <View style={styles.buttonsGroup}>
        <Button
          onPress={() => navigation.replace("SignUp")}
          title={"Customer Registration".toUpperCase()}
        />

        <View style={styles.vspace16} />

        <Button
          onPress={() => navigation.replace("SignUp")}
          title={"Service Provider Registration".toUpperCase()}
          outlined
        />

        <View style={styles.vspace32} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
