import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/bg-imgs/imagem1.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
          blurRadius={3}
        />
        <Text style={styles.cadastroTitle}>Cadastro</Text>
        <Text
          style={{
            fontStyle: "italic",color: "white",fontSize: 16
          }}
        >
          ETEC Animals
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          height: 5,
          width: "100%",
        }}
      ></View>
      {/* bg-roxo */}
      <View style={styles.bottomContainer}>
        {/* começa o form */}
        <View style={styles.form}>
          <Text style={styles.label}>Nome Completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
          />

          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />

          <Text style={styles.label}>Endereço:</Text>
          <TextInput style={styles.input} placeholder="Digite seu endereço" />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.registerButtonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Backbutton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.BackbuttonText}>Sair</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 1,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    top: 0,
    position: "absolute",
  },
  cadastroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: "#9b59b6",
    alignItems: "center",
    paddingTop: 20,
    height: "50%",
  },
  form: {
    backgroundColor: "#d3b2f7",
    width: "85%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#000",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: "#6c3483",
    width: "100%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
