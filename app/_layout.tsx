import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import moment from 'moment';
import { LogBox } from "react-native";
import { storage } from "./storage";

import { loadTensorflowModel } from 'react-native-fast-tflite';

const model = await loadTensorflowModel(require('../../assets/models/model.tflite'))

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  storage.LoadPoints();
  var now = moment().format();
  var currentDate = moment().format("YYYY-MM-DD");
  console.log(currentDate);
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
        {/* <Stack.Screen name = "+not-found" options={{}} /> */}
      </Stack>
    </>
  );
}
