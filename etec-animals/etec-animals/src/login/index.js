import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* img de fundo */}
        <Image
          source={require("../../assets/bg-imgs/imagem.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
          blurRadius={3}
        />
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Etec Animals</Text>
      </View>

      <View style={styles.whiteBar}></View>
      {/* fundo roxo */}
      <View style={styles.bottomContainer}>
        {/* começa o form */}
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.signupText}>Não possui cadastro</Text>
          </TouchableOpacity>
          {/* icon do dog */}
          <Image
            source={require("../../assets/icon/icon_main.png")}
            style={styles.logo}
          />
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
    width: "649",
    height: "477",
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: "#9b59b6",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  form: {
    width: "75%",
    paddingVertical: 20,
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
  loginButton: {
    backgroundColor: "#9F5BD0",
    width: "100%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  signupText: {
    marginTop: 15,
    color: "#fff",
    textDecorationLine: "underline",
  },
  logo: {
    marginTop: 20,
    width: 50,
    height: 50,
  },
  whiteBar: {
    backgroundColor: "#FFF",
    height: 5,
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#BE9ECF",
    position: "absolute",
    bottom: 100,
    margin: "auto",
    width: "75%",
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  descContainer: {
    marginEnd: "auto",
    marginStart: "auto",
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
});
