import { StyleSheet, Text, View } from "react-native";

export default function RewardScreen() {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Total Points: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#102820",
  },
  text: {
    color: "white",
  },
});
