import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  View,
} from "react-native";

import PickerComp from "../components/OrdersComp/Picker";
import ListViewComp from "../components/OrdersComp/ListView";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <PickerComp />
        <ListViewComp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
