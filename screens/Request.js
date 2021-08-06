import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  state,
} from "react-native";

import { SearchBar } from "react-native-elements";

import MapView from "react-native-maps";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Card from "../shared/RequestPageCards/card";
//import styles from "../components/RequestSearch/styles";

const Request = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeMap /> */}
      <View style={{ position: "relative" }}>
        <MapView
          initialRegion={{
            latitude: 5.605602,
            longitude: -0.178028,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      </View>

      <View
        style={{
          //backgroundColor: "blue",
          position: "absolute",
          width: Dimensions.get("window").width,
          // height: Dimensions.get("window").height,
          paddingBottom: 40,
        }}
      >
        {/* WEBSITE BELOW USED FOR SEARCH BAR */}
        {/* // https://reactnativeelements.com/docs/searchbar/ */}
        <SearchBar
          placeholder="Type Here..."
        />
      </View>

      <View
        style={{
          //backgroundColor: "blue",
          position: "absolute",
          width: Dimensions.get("window").width,
          // height: Dimensions.get("window").height,
          bottom: 0,
          paddingBottom: 40,
        }}
      >
        <View style={styles.locationContainer}>
          <View>
            <Card>
              <MaterialIcons
                name={"my-location"}
                size={26}
                color={"#55AE3A"}
                onPress={() => {
                  navigation.navigate("Riders");
                }}
              />
              <Text style={{ fontSize: 13, textAlign: "center" }}>
                Current Location
              </Text>
            </Card>
          </View>

          <Card>
            <MaterialIcons
              name={"save"}
              size={26}
              color={"#55AE3A"}
              onPress={() => {
                navigation.navigate("Riders");
              }}
            />
            <Text style={{ fontSize: 13, textAlign: "center" }}>
              Saved Location
            </Text>
          </Card>

          <Card>
            <AntDesign
              name={"plussquare"}
              size={26}
              color={"#55AE3A"}
              onPress={() => {
                navigation.navigate("Riders");
              }}
            />
            <Text
              style={{
                fontSize: 13,
                textAlign: "center",
              }}
            >
              New Location
            </Text>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // // alignItems: "center",
    // // justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    //position: "absolute",
    elevation: 3,
    borderRadius: 10,
    //backgroundColor: "#C5E3BF",
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Request;
