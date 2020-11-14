import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";

import Routes from "./src/routes";

export default function App() {
  const [isAssetsLoading, setIsAssetsLoading] = useState(false);
  useEffect(() => {
    async function loadAssets() {
      setIsAssetsLoading(true);
      await Font.loadAsync({
        "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
        "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
      });
      setIsAssetsLoading(false);
    }

    loadAssets();
  }, []);
  if (isAssetsLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: "#312e38" }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
