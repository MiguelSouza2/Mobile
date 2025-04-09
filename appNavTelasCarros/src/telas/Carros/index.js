import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Carros({ navigation }) {
    const soundRef = useRef();

    const tocarBuzina = () => {
        alert("biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    };

    return (
        <ImageBackground 
            source={require('../../../assets/img/fundo3.jpg')} 
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Ionicons name="car-sport-outline" size={90} color="#FFD700" />
                <Text style={styles.titulo}>Vrum Vruuum! Bem-vindo à garagem!</Text>

                <TouchableOpacity style={styles.botao} onPress={tocarBuzina}>
                    <Text style={styles.textoBotao}>Buzinar!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 28,
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    botao: {
        backgroundColor: '#D80303',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
});
