import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { storage } from "./storage";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  storage.LoadPoints();
  return (
    <>
      <StatusBar style = "light"/>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name = "+not-found" options={{}} />
      </Stack>
    </>
  );
}
