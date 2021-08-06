import React from "react";
import { StyleSheet, View, Image, Text, SafeAreaView } from "react-native";

export default function header(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Good Morning,</Text>
          <Text style={styles.headerName}>Alexa Sanch</Text>
        </View>

        <View style={styles.headerNameGreetings}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/profilememoji.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "column",
  },
  headerText: {
    fontSize: 25,
    //fontWeight: "bold",
    color: "white",
    paddingLeft: 20
  },
  headerName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 20
  },
  headerImage: {
    marginRight: 15,
    width: 60,
    height: 60,
  },
  headerNameGreetings: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
