import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 4,
    backgroundColor: "#ffffff",
    //shadowOffset: { width: 1, height: 1 },
    //shadowColor: "red",
    //shadowOpacity: 0.3,
    //shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 35,
    //backgroundColor: "#F79B77",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
