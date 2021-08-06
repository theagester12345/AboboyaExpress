import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Picker, Button } from "react-native";

import AllOrdersIcon from "react-native-vector-icons/AntDesign";
import SuccessIcon from "react-native-vector-icons/AntDesign";
import FailIcon from "react-native-vector-icons/AntDesign";


export default function App(){
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <AllOrdersIcon name={"profile"} size={20} style={styles.icons}/>
        </View>

        <View style={styles.card}>
        <SuccessIcon name={"checksquareo"} size={20} style={styles.icons}/>
        </View>

        <View style={styles.card}>
        <FailIcon name={"closesquareo"} size={20} style={styles.icons}/>
        </View>

      </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 6,

  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: 100,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  icons: {

  }, 
});