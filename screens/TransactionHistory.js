// import node modules
import React, { Component } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

// import components
import OrderItem from "../components/Cards/OrderItemA";

// import colors
import Colors from "../theme/colors";

// OrdersA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  productsContainer: {
    paddingVertical: 8,
  },
});

// OrdersA
export default class OrdersA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [
        {
          orderNumber: "03",
          orderDate: "22 July, 2019",
          orderStatus: "completed",
        },
        {
          orderNumber: "02",
          orderDate: "10 July, 2019",
          orderStatus: "completed",
        },
        {
          orderNumber: "01",
          orderDate: "05 July, 2019",
          orderStatus: "completed",
        },
      ],
    };
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  navigateTo = (screen) => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = (item) => item.orderNumber.toString();

  renderItem = ({ item, index }) => (
    <OrderItem
      key={index}
      activeOpacity={0.8}
      orderNumber={item.orderNumber}
      orderDate={item.orderDate}
      // orderItems={item.orderItems}
      orderStatus={item.orderStatus}
      onPress={this.navigateTo("Product")}
    />
  );

  render() {
    const { orders } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.container}>
          <FlatList
            data={orders}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            contentContainerStyle={styles.productsContainer}
          />
        </View>
      </SafeAreaView>
    );
  }
}
