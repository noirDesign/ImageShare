import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView} from "react-native";
import {Button, Input,Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // firebase
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            console.log(authUser);
            if(authUser){
                navigation.replace("Home")
            }
        });

        return unsubscribe;
    }, [])

    const signIn=()=>{

    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
                }}
                style={{ width: 110, height: 110, marginBottom:25 }}
            />

            <View style={styles.inputConainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChange={(text) =>setEmail(text)} />
                <Input placeholder="Contraseña" secureTextEntry type="password" value={password} onChange={(text) =>setPassword(text)}/>
            </View>

            <Button containerStyle={styles.button} buttonStyle={{backgroundColor: '#2c6bed', borderRadius:20, padding:10}} title='Iniciar sesion' onPress={signIn}/>
            <Button buttonStyle={{borderColor: '#2c6bed', borderRadius:20, padding:10, color:'#2c6bed'}} containerStyle={styles.button} type="outline" title='Registrase' onPress={()=>navigation.navigate("Registrarse")}/>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container:{flex:1, alignItems:"center", justifyContent:'center', padding:8},
    inputConainer:{width:320},
    button:{width:300, marginTop:15}

})

export default Login;
