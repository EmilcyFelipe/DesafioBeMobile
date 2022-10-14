import React from "react";
import Home from "./src/pages/Home";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Home />
    </SafeAreaView>
  );
}
