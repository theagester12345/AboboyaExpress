import React, { Component } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView,
  Image, 
  TouchableOpacity
}from "react-native";

import RidersCardView from "../../screens/RidersPage/RidersViewCard";

class ListViewComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false} 
        >
          <RidersCardView>
            <View style={styles.containerView}>
              <View>
                <Image source={require("../../assets/profile_1.jpeg")} />
              </View>
              <View style={styles.innercontainerView}>
                <View>
                  <Text style={styles.fullNameView}>FULL NAME</Text>
                  <Text style={styles.descriptionView}>
                    Lorem ipsum is a pseudo-Latin text used in web design in
                    place of English to emphasise design elements over content.
                  </Text>
                </View>
                <View style={styles.parent}>
                  <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Review</Text>
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
                    Lorem ipsum is a pseudo-Latin text used in web design in
                    place of English to emphasise design elements over content.
                  </Text>
                </View>
                <View style={styles.parent}>
                  <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Review</Text>
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
                    Lorem ipsum is a pseudo-Latin text used in web design in
                    place of English to emphasise design elements over content.
                  </Text>
                </View>
                <View style={styles.parent}>
                  <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Review</Text>
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
                    Lorem ipsum is a pseudo-Latin text used in web design in
                    place of English to emphasise design elements over content.
                  </Text>
                </View>
                <View style={styles.parent}>
                  <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Review</Text>
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
                    Lorem ipsum is a pseudo-Latin text used in web design in
                    place of English to emphasise design elements over content.
                  </Text>
                </View>
                <View style={styles.parent}>
                  <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Review</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </RidersCardView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  parent: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
});

export default ListViewComponent;
