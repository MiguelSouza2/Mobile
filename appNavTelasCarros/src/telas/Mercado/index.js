import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";

export default function Mercado({ navigation }) {
    const carros = [
        {
            nome: "McQueen V8",
            preco: "R$ 250.000",
            img: require("../../../assets/img/carrinhos/mcqueen.png")
        },
        {
            nome: "Jack GT",
            preco: "R$ 310.000",
            img: require("../../../assets/img/carrinhos/jack.png")
        },
        {
            nome: "Vovô Doc",
            preco: "R$ 35.000",
            img: require("../../../assets/img/carrinhos/doc.png")
        },
        {
            nome: "Omelhorpersonagem",
            preco: "R$ 35.000",
            img: require("../../../assets/img/carrinhos/mate.png")
        }
    ];

    return (
        <ImageBackground 
            source={require("../../../assets/img/fundo4.jpg")} 
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.titulo}>🔥 Mercado de Carros 🔥</Text>
            <ScrollView contentContainerStyle={styles.lista}>
                {carros.map((carro, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={carro.img} style={styles.imagemCarro} />
                        <Text style={styles.nome}>{carro.nome}</Text>
                        <Text style={styles.preco}>{carro.preco}</Text>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.textoBotao}>Ver Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 40,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        borderRadius: 10,
    },
    lista: {
        alignItems: 'center',
        paddingBottom: 100,
    },
    card: {
        backgroundColor: '#ffffffcc',
        width: 300,
        marginBottom: 20,
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    imagemCarro: {
        width: 250,
        height: 130,
        borderRadius: 10,
        marginBottom: 10,
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    preco: {
        fontSize: 18,
        color: '#D80303',
        marginBottom: 10,
    },
    botao: {
        backgroundColor: '#3f64c7',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
});
