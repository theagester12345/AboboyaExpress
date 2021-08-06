import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import RidersCardView from "./RidersViewCard";

import AntDesign from "react-native-vector-icons/AntDesign";

const Riders = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* Header Section */}

      <View style={styles.header}>
        <View
          style={{ flexDirection: "row", paddingLeft: 8, alignItems: "center" }}
        >
          <AntDesign
            name={"left"}
            size={25}
            color={"black"}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ paddingLeft: 5, fontWeight: "bold", fontSize: 18 }}>
              back
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Contents Section  */}
        <RidersCardView>
          <View style={styles.containerView}>
            <View>
              <Image source={require("../../assets/profile_1.jpeg")} />
            </View>
            <View style={styles.innercontainerView}>
              <View>
                <Text style={styles.fullNameView}>FULL NAME</Text>
                <Text style={styles.descriptionView}>
                  Lorem ipsum is a pseudo-Latin text used in web design in place
                  of English to emphasise design elements over content.
                </Text>
              </View>
              <View style={styles.parent}>
                <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                  <Text style={styles.text}>Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RidersCardView>

        <RidersCardView>
          <View style={styles.containerView}>
            <View>
              <Image source={require("../../assets/profile_1.jpeg")} />
            </View>
            <View style={styles.innercontainerView}>
              <View>
                <Text style={styles.fullNameView}>FULL NAME</Text>
                <Text style={styles.descriptionView}>
                  Lorem ipsum is a pseudo-Latin text used in web design in place
                  of English to emphasise design elements over content.
                </Text>
              </View>
              <View style={styles.parent}>
                <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                  <Text style={styles.text}>Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RidersCardView>

        <RidersCardView>
          <View style={styles.containerView}>
            <View>
              <Image source={require("../../assets/profile_1.jpeg")} />
            </View>
            <View style={styles.innercontainerView}>
              <View>
                <Text style={styles.fullNameView}>FULL NAME</Text>
                <Text style={styles.descriptionView}>
                  Lorem ipsum is a pseudo-Latin text used in web design in place
                  of English to emphasise design elements over content.
                </Text>
              </View>
              <View style={styles.parent}>
                <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                  <Text style={styles.text}>Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RidersCardView>

        <RidersCardView>
          <View style={styles.containerView}>
            <View>
              <Image source={require("../../assets/profile_1.jpeg")} />
            </View>
            <View style={styles.innercontainerView}>
              <View>
                <Text style={styles.fullNameView}>FULL NAME</Text>
                <Text style={styles.descriptionView}>
                  Lorem ipsum is a pseudo-Latin text used in web design in place
                  of English to emphasise design elements over content.
                </Text>
              </View>
              <View style={styles.parent}>
                <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                  <Text style={styles.text}>Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RidersCardView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#ffffff",
    height: 60,
  },
  containerView: {
    flexDirection: "row",
  },
  innercontainerView: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  fullNameView: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionView: {
    textAlign: "center",
    fontSize: 15,
  },
  button: {
    elevation: 3,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#fff",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  parent: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default Riders;
