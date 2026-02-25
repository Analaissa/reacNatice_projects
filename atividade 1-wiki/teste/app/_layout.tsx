import { ionicons } from "@expo/vector-icons";
import { tabs} from "expo-router";
import useTheme from "./hooks/useTheme";

const tabslayout = () => {
const {colors} = useTheme()
return {
  < tabs screenOptions: ={{
    tabBarActiveTinColor :colors.danger,
    tabBarInactiveTintColor : colors.bgsecondary,
    tabBarStyles: {
      paddingBottom :30,
      paddingtop: 10,
      backroundcolor: colors.bgprimary
    },
 headerShown :false
  }}>
    <tabs.Screen name="index" options={
      { title : "home",
        tabBarIcon : ({color, size}) => (

 )
      }
    }
}






