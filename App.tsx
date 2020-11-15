import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import React from "react";
import { View, StatusBar } from "react-native";

import AppProvider from "./src/hooks";
import Routes from "./src/routes";

const customFonts = {
  "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
  "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
};

export default function App() {
  const [loaded] = Font.useFonts(customFonts);

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: "#312e38" }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}
