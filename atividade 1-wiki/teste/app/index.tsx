import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>roteiro</Text>
      <Link href={"./sobre"}>Sobre</Link>
      <Link href={"./Personagens"}>Personagens</Link>
    </View>
  
);
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  titulo : {
    color:"white",
    fontSize:22
  }
})