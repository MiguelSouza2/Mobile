import React, {useState} from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";

export default function Home({route, navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/img/fundo.jpg')}
                style={styles.imgBg}
            >
                <View style={styles.logo}>
                    <Image
                        style={{
                            width: 320
                        }}
                        source={require('../../../assets/img/react.png')}
                    ></Image>
                </View>
                <Text style={styles.texto}>Bem-Vindo {route.params?.nome}</Text>
                <View style={styles.viewBotao}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Usuario")}
                    >
                        <Text style={styles.textoBotao}>Entrar no App</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontFamily: 'Comic-Sans',
      fontSize: 40,
      color: '#fff',
    },
    input:{
        textAlign: 'center',
        width: 100,
        borderWidth: 5,
        borderColor: 'black'
    },
    logo:{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    imgBg:{
        width: '100%',
        height: '100%',
        opacity: 1
    },
    botao:{
        backgroundColor: "#4654ef",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding: 10
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18
    }
  });
  