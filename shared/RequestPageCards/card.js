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
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    width: 90,
    height: 90,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
