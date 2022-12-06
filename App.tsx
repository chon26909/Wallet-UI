import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import RootStack from "./src/navigators/RootStack";

export default function App() {
    let [fontsLoaded] = useFonts({
        "Kanit-Bold": require("./assets/fonts/Kanit-Bold.ttf"),
        "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
        "Kanit-Light": require("./assets/fonts/Kanit-Light.ttf")
    });

    if (!fontsLoaded) return <AppLoading />;

    return <RootStack />;
}
