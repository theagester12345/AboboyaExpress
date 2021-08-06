import React from "react";
import { StyleSheet, View } from "react-native";

export default function cardFour(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    // backgroundColor: "#F18D9E",
    backgroundColor: "#ffffff",
    marginLeft: 10, 
    marginRight: 10,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  
  },
});
