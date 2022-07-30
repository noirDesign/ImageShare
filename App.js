import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const globalScreen = {
    headerStyle: {backgroundColor: "#2c6bed"},
    headerTitleStyle:{color: "white"},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: '400'},
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreen}>
                <Stack.Screen name="Iniciar sesion" component={Login} />
                <Stack.Screen name="Registrarse" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
