import { StyleSheet, Text, View } from "react-native";
import { storage } from "../storage";

var currentPoints = storage.LoadPoints();

export default function RewardScreen() {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Total Points: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 10,
    borderColor: "#102820",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#102820",
  },
  text: {
    color: "white",
  },
});
