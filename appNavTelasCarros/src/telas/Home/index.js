import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";

export default function Home({route, navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={require('../../../assets/img/fundo4.jpg')} // troque pra uma imagem com tema automobilístico
                    style={styles.imgBg}
                >
                    <View style={styles.logo}>
                        <Image
                            style={{ width: 300, resizeMode: 'contain' }}
                            source={require('../../../assets/img/react.png')} // coloque uma logo com tema automotivo
                        />
                    </View>
                    
                    <Text style={styles.texto}>Bem-vindo de volta, {route.params?.nome}</Text>
                    
                    <View style={styles.viewBotao}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => navigation.navigate("Usuario")}
                        >
                            <Text style={styles.textoBotao}>Acelerar!</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    logo: {
        marginTop: 50,
        marginBottom: 30,
        alignItems: 'center',
    },
    texto: {
        fontSize: 32,
        color: '#f5f5f5',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        marginBottom: 40,
  