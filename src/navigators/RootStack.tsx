import React, { FunctionComponent } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";

import avatar from "../../assets/images/avatar.png";

type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        marginRight: 20
                    },
                    headerRight: () => <Profile img={avatar} />
                }}
            >
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerTitle: (props) => (
                            <Greeting mainText='Hello!' subText='Welcome' {...props} />
                        )
                    }}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
