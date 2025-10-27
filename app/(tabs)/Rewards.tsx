import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function RewardScreen() {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Total Points: </Text>
      <View style={styles.row}>
        <Image style={styles.image}
          source={require("../../assets/images/hat.png")}
          contentFit="contain"
          transition={1000}
        />
        <Image style={styles.image}
          source={require("../../assets/images/golf.png")}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View style={styles.row}>
        <Image style={styles.image}
          source={require("../../assets/images/mouse_pad.png")}
          contentFit="contain"
          transition={1000}
        />
        <Image style={styles.image}
          source={require("../../assets/images/mug.png")}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View style={styles.row}>
        <Image style={styles.image}
          source={require("../../assets/images/notebook.png")}
          contentFit="contain"
          transition={1000}
        />
        <Image style={styles.image}
          source={require("../../assets/images/water_bottle.png")}
          contentFit="contain"
          transition={1000}
        />
      </View>
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
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around", // or 'space-between'
    alignItems: "center",
    paddingHorizontal: 12,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    backgroundColor: "#ffffff",
  }
});
