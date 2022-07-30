import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView} from "react-native";
import {Button, Input, Image, Text } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(()=>{
        navigation.setOptions({
        })
    })

    const register =()=>{}

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            {/* <Text h4>Create una cuenta en Signal</Text> */}

            <View style={styles.inputConainer}>
                <Input placeholder="Name" autoFocus type="text" value={name} onChangeText={(text)=>setName(text)}/>
                <Input placeholder="Email" type="email" value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input placeholder="Contraseña" secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)}/>
                <Input placeholder="Foto de perfil " type="text" value={imageUrl} onChangeText={(text)=>setImageUrl(text)}onSubmitEditing={register} />
            </View>

            <Button containerStyle={styles.button} buttonStyle={{backgroundColor: '#2c6bed', borderRadius:20, padding:10}} title="Registrarse" onPress={register} />
            
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container:{flex:1, alignItems:"center", justifyContent:'center', padding:8},
    inputConainer:{width:320},
    button:{width:300, marginTop:15}
});
export default Register;
