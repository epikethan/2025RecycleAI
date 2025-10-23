import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

import { loadTensorflowModel } from 'react-native-fast-tflite';

const model = await loadTensorflowModel(require('../../assets/models/model.tflite'))

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#caba9c",
        headerStyle: {
          backgroundColor: "#102820",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#102820",
        },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Track",
          tabBarIcon: ({focused, color}) => <FontAwesome name="recycle" size={24} color= {color} />
        }}
      />
      <Tabs.Screen 
        name="Calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "calendar-sharp" : "calendar-outline"} color = {color} size = {24} />
        }}
      />
      <Tabs.Screen 
        name="Rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "gift-sharp" : "gift-outline"} color = {color} size = {24} />
        }}
      />
      {/*<Tabs.Screen name = "+not-found" options={{}} />*/}
    </Tabs>
  );
}
