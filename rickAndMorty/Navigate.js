import Main from './Components/Main'
import Character from "./Components/Character";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#070404',
            background: '#fff',
        },
    };
    return <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: "Charecters"}}
            />
            <Stack.Screen
                name="Character"
                component={Character}
                options={{title: ""}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}