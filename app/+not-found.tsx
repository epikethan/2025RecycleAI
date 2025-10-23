import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen  options={{ title: "Page Not Found."}} />
      <View style = {styles.container}>
        <Link href={"https://www.carboncare.org/en/co2-emissions-calculator"} style={styles.button}>
          Go Back to Home Screen
        </Link>
      </View>
    </>
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
  button: {
    fontSize: 20,
    color: "white",
  },
});
