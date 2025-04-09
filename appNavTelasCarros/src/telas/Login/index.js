import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, KeyboardAvoidingView, Image,
  Animated, ImageBackground, TouchableOpacity, TextInput
} from 'react-native';

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opac] = useState(new Animated.Value(0));
  const [nome, setNome] = useState('');

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opac, {
        toValue: 1,
        duration: 2000,
      })
    ]).start();
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/img/fundo.jpg')} // coloque uma imagem estilo pista ou relâmpago
      style={styles.imgBg}
    >
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.logo}>
          <Image
            style={{ width: 280, resizeMode: 'contain' }}
            source={require('../../../assets/img/react.png')} // imagem do Relâmpago McQueen ou algo racing
          />
        </View>

        <Animated.View style={[styles.formulario, {
          opacity: opac,
          transform: [{ translateY: offset.y }]
        }]}>
          <Text style={styles.textoBemVindo}>Pronto pra correr?</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite seu nome de piloto'
            placeholderTextColor="#555"
            onChangeText={setNome}
          />

          <View style={styles.viewBotao}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Home", { nome })}
            >
              <Text style={styles.textoBotao}>Ka-chow!</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
  },

  formulario: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: -50
  },

  textoBemVindo: {
    fontSize: 26,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  input: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 8,
    padding: 12,
    width: '90%',
    borderWidth: 2,
    borderColor: '#d40000',
  },

  viewBotao: {
    width: '90%',
    borderRadius: 8,
  },

  botao: {
    backgroundColor: '#d40000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 6,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  imgBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
  },
});
