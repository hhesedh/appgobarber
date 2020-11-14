import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";

import Routes from "./src/routes";

const customFonts = {
  "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
  "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
};

export default function App() {
  const [isfontsLoaded, setIsfontsLoaded] = useState(false);
  useEffect(() => {
    async function _loadFontsAsync() {
      try {
        await Font.loadAsync(customFonts);
      } catch (error) {
        console.log(error);
      }

      setIsfontsLoaded(true);
    }

    _loadFontsAsync();
  }, []);

  if (!isfontsLoaded) {
    return <AppLoading />;
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
