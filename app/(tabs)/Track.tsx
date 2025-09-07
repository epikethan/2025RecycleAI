import ImageButton from "@/components/ImageButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.")
    }
  }
  if(isAdded){
    return(
      <View>
        <Text>Calculation is: {name + quantity}</Text>
      </View>
    )
  } else{
    return (
      <View style = {styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage = {selectedImage} />
        </View>
        <View style={styles.footerContainer}>
          <ImageButton label = " Choose a photo" theme="primary" onPress = {pickImageAsync} />
        </View>
        
        <View style={styles.footerContainer}>
          <Button title="add" onPress={()=>{setIsAdded(true)}}/>
        </View>
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#102820",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer:{
    flex: 1/6,
    alignItems: "center",
  },
  input:{
    alignItems: "center",
    height: 40,
    width: 300,
    borderColor: '#4d2d18',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "#caba9c",
    fontSize: 16,
    margin: 10,
  }
});
