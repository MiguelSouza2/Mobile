import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";

export default function Home({route, navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={require('../../../assets/img/fundo2.jpg')} // troque pra uma imagem com tema automobilístico
                    style={styles.imgBg}
                    resizeMode="cover"
                >
                    <View style={styles.logo}>
                        <Image
                            style={{ width: 300, resizeMode: 'contain' }}
                            source={require('../../../assets/img/peugeot.png')} // coloque uma logo com tema automotivo
                        />
                    </View>
                    
                    <Text style={styles.texto}>Bem-vindo de volta, {route.params?.nome}</Text>
                    
                    <View style={styles.viewBotao}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => navigation.navigate("Carros")}
                        >
                            <Text style={styles.textoBotao}>Acelerar!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewBotao}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => navigation.navigate("Mercado")}
                        >
                            <Text style={styles.textoBotao}>Investir!</Text>
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
        marginTop: 20,
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
        marginBottom: 10,
    },
    viewBotao: {
        marginTop: 10,
    },
    botao: {
        backgroundColor: '#d40000',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
});
