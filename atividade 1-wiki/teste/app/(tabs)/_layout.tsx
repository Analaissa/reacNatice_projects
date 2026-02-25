import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    const { colors } = useTheme()
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor : colors.danger,
            tabBarInactiveTintColor : colors.bgPrimary,
            tabBarStyle: {
                paddingBottom : 30,
                paddingTop: 10,
                backgroundColor : colors.bgSecondary
            },
            headerShown: false
        }}>
            <Tabs.Screen name='index' options={
                { title: "Home",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='home' color={color} size={size}/>
                  ) 
            }} />
           <Tabs.Screen name='catalogo' options={
                { title: "Shop",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='cart' color={color} size={size}/>
                  ) 
            }} />
        </Tabs>
    )
}

export default TabsLayout