// import "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./screens/DrawerContent";

import WelcomePage from "./screens/Welcome";
import SignInPage from "./screens/SignIn";
import SignUpPage from "./screens/SignUp";
import HomePage from "./screens/Home";
import RequestPage from "./screens/Request";
import TransactionHistoryPage from "./screens/TransactionHistory";
import MyProfilePage from "./screens/MyProfile";
import OrdersPage from "./screens/Orders";
import RidersPage from "./screens/RidersPage/Riders";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              // "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
              "https://www.redmenfamily.de/images/nav.png",
          }}
          style={{
            width: 30,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
        },
        headerTintColor: "#000000", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "Home", //Set Header Title
          //gestureEnabled: false
        }}
        screenOptions={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="Request"
        component={RequestPage}
        options={{
          title: "Riders", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function forthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Request"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
        },
        headerTintColor: "#000000", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="RequestPage"
        component={RequestPage}
        options={{
          title: "Request", //Set Header Title
        }}
      />
      <Stack.Screen
        name="Riders"
        component={RidersPage}
        options={{
          headerShown: false,
          title: "Riders", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function seventhScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Orders"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
        },
        headerTintColor: "#000000", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersPage}
        options={{
          title: "Orders", //Set Header Title
        }}
      />
      {/* <Stack.Screen
        name="Riders"
        component={RidersPage}
        options={{
          title: "Riders", //Set Header Title
        }}
      /> */}
    </Stack.Navigator>
  );
}

function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="TransactionHistory"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
        },
        headerTintColor: "#000000", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryPage}
        options={{
          title: "TransactionHistory", //Set Header Title
        }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfilePage}
        options={{
          title: "Profile", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function sixthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="MyProfile"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
        },
        headerTintColor: "#000000", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="MyProfile"
        component={MyProfilePage}
        options={{
          title: "Profile", //Set Header Title
        }}
      />
      {/* <Stack.Screen
        name="MyProfile"
        component={MyProfilePage}
        options={{
          title: "Profile", //Set Header Title
        }}
      /> */}
    </Stack.Navigator>
  );
}

function WelcomeApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        {/* <Stack.Screen name="Riders" component={RidersPage} /> */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }} //Prevents the header with the back arrow from showing
          component={App}
        />
        <Stack.Screen
          name="Request"
          options={{
            headerShown: false,
          }} //Prevents the header with the back arrow from showing
          component={App1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        //options={{ drawerLabel: "Home"}}
        component={thirdScreenStack}
      />
      <Drawer.Screen
        name="Request"
        //options={{ drawerLabel: "Request" }}
        component={forthScreenStack}
      />
      <Drawer.Screen
        name="TransactionHistory"
        //options={{ drawerLabel: "Logout" }}
        component={fifthScreenStack}
      />
      <Drawer.Screen
        name="MyProfile"
        //options={{ drawerLabel: "Logout" }}
        component={sixthScreenStack}
      />
      <Drawer.Screen
        name="Orders"
        //options={{ drawerLabel: "Logout" }}
        component={seventhScreenStack}
      />
    </Drawer.Navigator>
  );
}

function App1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Request">
        <Stack.Screen name="Request" component={RequestPage} />
        <Stack.Screen
          name="Riders"
          options={{ headerShown: true }}
          component={RidersPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default WelcomeApp;
