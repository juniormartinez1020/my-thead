import '../../global.css'


import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";


const myTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'white',
        card: '#101010'
    }
}


export default function RootLayout() {
    return (
        <ThemeProvider value={myTheme}>
            <Slot />
        </ThemeProvider>
    )
}