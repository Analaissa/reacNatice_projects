import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/usetheme";
export default function Index() {
  return (
    <View style={styles.container}>
      <view style = {styles.main}
      <Link href={styles.texto}>Home</Link>
      <Link href={"./catalogo"}>Shope</Link>
      <TouchableOpacity   onpress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
    </view>
    </View>
  
);
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  titulo : {
    color:"white",
    fontSize:22
  }
})