import { createContext , reactNode, usecontext,} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {View, Text} from 'react-native';

export interface colorScheme {
    bgprimary: string;
    bgsecundary: string;
    success: string;
    danger: string;
    warning: string;
    text: string;
    gradients:{
        background: [string, string]
    }
    statustheme : "light" | "dark";
}
  const lightColors: colorScheme ={
    bgprimary: "#2b2a2a",
    bgsecundary: "#cfcece",
    success: "#88e12f",
    danger: "#e73232",
    warning: "#ecc107",
    text:  "#eaeaea",
    gradients: {
        background: ["#3a3939", "#232222"],
    },
    statustheme : "light" as const,
  }

  const darkColors: colorScheme ={
    bgprimary: "#fff",
    bgsecundary: "#f0f0f0",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    text:  "#262626",
    gradients: {
        background: ["#fff", "#f0f0f0"],
    },
    statustheme : "dark" as const,
  }

// null check - verificicar o tipo do contexto 
// void - nada
interface ThemeContextType {
     isDarkMode: boolean;
     toggleDarkMode: () => void;
     colors : colorScheme;
}
 
const themecontext = createContext<undefined | ThemeContextType>(undefined);

const usetheme = () => {

}
 
// themeProvider - altera o esquema de cores
export const ThemeProvider = ({children} : {children : ReactNode } ) =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
        //coleta o que o usuario vai escolher e salva na memoria
        AsyncStorage.getItem("darkMode").then((value) =>{
            if(value) setIsDarkMode(JSON.parse(value));
        });
    }, []);
    // troca o tema
    const toggleDarkMode = () =>{
        const newMode =!isDarkMode;
        setIsDarkMode(newMode)
        await AsyncStorage.setItem("darkMode", JSON.stringify(newMode))
};
const colors = isDarkMode ? darkColors : lightColors;
return (
    <themecontext.Provider  value={{isDarkMode, toggleDarkMode, colors}}>
        {children}
    </themecontext.Provider>
   
)
}
const usetheme = () => {

}
if (context === undefined) {
    
}
export default usetheme