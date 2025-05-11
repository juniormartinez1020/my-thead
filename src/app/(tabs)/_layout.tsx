import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{ 
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false
        }}
        >
            <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Home',
                tabBarIcon: ({ size, color }) => <FontAwesome 
                name="home" size={size} color={color} />
            }}
             />
            <Tabs.Screen 
            name="search" 
            options={{ title: 'Search', 
                tabBarIcon: ({ size, color }) => 
                <Feather name="search" size={size} color={color} /> }} 
            />
            <Tabs.Screen 
            name="notification" 
            options={{ title: 'Notification', 
                tabBarIcon: ({ size, color }) => 
                <AntDesign name="hearto" size={size} color={color} />
             }} 
            />
            <Tabs.Screen 
            name="profile" 
            options={{ title: 'Profile', 
                tabBarIcon: ({ size, color }) => 
                <AntDesign name="user" size={size} color={color}/>
             }}
             />
        </Tabs>
    )
}