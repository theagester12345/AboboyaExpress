// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Image,
} from "react-native";

import RecentOrdersCardComponent from "../shared/HomePageCards/recentorders/orderscard";
import RecentOrdersDetailsComponent from "../shared/HomePageCards/recentorders/oderdetails";

import BalCardComponent from "../shared/HomePageCards/balance/balcard";
import CardThreeComponent from "../shared/HomePageCards/cardThree";
import CardFourComponent from "../shared/HomePageCards/cardFour";
import HeaderComponent from "../components/HomeScreen/header";

import Donut from "../components/Donut/animateddonut";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/Entypo";

export default class Home extends Component {
  // disableBackButton = () => {
  //   BackHandler.exitApp();
  //   return true;
  // }

  // componentWillMount(){
  //     BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
  // }

  // componentWillUnmount(){
  //     BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
  // }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#93DB70", flex: 1 }}>
        <View>
          <HeaderComponent />
        </View>

        <View
          style={{
            borderRadius: 25,
            //elevation: 1,
            backgroundColor: "#C5E3BF",
            //shadowOffset: { width: 1, height: 1 },
            //shadowColor: "red",
            //shadowOpacity: 0.3,
            //shadowRadius: 5,
            marginHorizontal: 4,
            marginVertical: 6,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 25,
            //backgroundColor: "#F79B77",
          }}
        >
          <ScrollView>
            <View>
              {/* Top Section of Cards */}
              <View>
                <RecentOrdersCardComponent>
                  <View flexDirection="row">
                    <Icon name="inbox" size={25} />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        paddingLeft: 5,
                        justifyContent: "center",
                      }}
                    >
                      Recent Orders
                    </Text>
                  </View>
                  {/* <Text style={{ fontWeight: "bold", fontSize: 20, borderBottomWidth: 1}}>
                  Riders in the area: 5
                </Text> */}
                  <ScrollView
                    style={{ height: 200 }}
                    showsVerticalScrollIndicator={false}
                  >
                    <RecentOrdersDetailsComponent>
                      <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "space-between",
                        }}
                      >
                        <Image
                          source={require("../assets/emoji1.png")}
                          style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginLeft: 20,
                              fontSize: 16,
                            }}
                          >
                            Emmanuel Davis
                          </Text>
                          <Text
                            style={{
                              marginLeft: 20,
                              color: "grey",
                              fontSize: 11,
                            }}
                          >
                            08th June 2021
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              textAlign: "right",
                            }}
                          >
                            GHS 99
                          </Text>
                        </View>
                      </View>
                    </RecentOrdersDetailsComponent>

                    <RecentOrdersDetailsComponent>
                      <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "space-between",
                        }}
                      >
                        <Image
                          source={require("../assets/memoji2.png")}
                          style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginLeft: 20,
                              fontSize: 16,
                            }}
                          >
                            Alex Chong
                          </Text>
                          <Text
                            style={{
                              marginLeft: 20,
                              color: "grey",
                              fontSize: 11,
                            }}
                          >
                            06th June 2021
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              textAlign: "right",
                            }}
                          >
                            GHS 110
                          </Text>
                        </View>
                      </View>
                    </RecentOrdersDetailsComponent>

                    <RecentOrdersDetailsComponent>
                      <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "space-between",
                        }}
                      >
                        <Image
                          source={require("../assets/memoji3.png")}
                          style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginLeft: 20,
                              fontSize: 16,
                            }}
                          >
                            Justina Aquah
                          </Text>
                          <Text
                            style={{
                              marginLeft: 20,
                              color: "grey",
                              fontSize: 11,
                            }}
                          >
                            06th June 2021
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              textAlign: "right",
                            }}
                          >
                            GHS 100
                          </Text>
                        </View>
                      </View>
                    </RecentOrdersDetailsComponent>

                    <RecentOrdersDetailsComponent>
                      <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "space-between",
                        }}
                      >
                        <Image
                          source={require("../assets/memoji4.png")}
                          style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginLeft: 20,
                              fontSize: 16,
                            }}
                          >
                            Gerard Justin
                          </Text>
                          <Text
                            style={{
                              marginLeft: 20,
                              color: "grey",
                              fontSize: 11,
                            }}
                          >
                            03th June 2021
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              textAlign: "right",
                            }}
                          >
                            GHS 150
                          </Text>
                        </View>
                      </View>
                    </RecentOrdersDetailsComponent>
                  </ScrollView>
                </RecentOrdersCardComponent>
              </View>
              {/* Top Section of Cards */}
              {/* Middle Section of Cards */}
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <BalCardComponent>
                    <View flexDirection="row">
                      <Icon1 name="wallet" size={25} />
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 15,
                          paddingLeft: 5,
                        }}
                      >
                        Balance
                      </Text>
                    </View>

                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                      GHS 1000
                    </Text>
                    <Text></Text>
                    <Text style={{ fontSize: 13 }}>Last Updated: </Text>
                    <Text style={{ fontSize: 13 }}>25mins ago</Text>
                  </BalCardComponent>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    marginRight: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Donut />
                </View>
              </View>
              {/* Middle Section of Cards */}
            </View>
            {/* Bottom Section of Cards */}
            <View>
              <CardFourComponent>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    textAlign: "center",
                  }}
                >
                  FAQ
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  What does LOREM mean?
                </Text>
                <Text>
                   The text is intentionally unintelligible so that the viewer is not distracted by the content. 
                </Text>
              </CardFourComponent>
            </View>
            {/* Bottom Section of Cards */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
