import React, {useState} from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function List(){
    const names = [
        {id: 0, name: '1984', author: 'George Orwell'},
        {id: 1, name: 'O Pequeno Principe', author: 'Antoine de Saint-Exupéry'},
        {id: 2, name: 'Sapiens', author: 'Yuval Harari'},
        {id: 3, name: 'Breves respostas para grandes questões', author: 'Stephen Hawking'},
        {id: 4, name: 'Ideias Para Adiar o Fim do Mundo', author: 'Ailton Krenak'},
        {id: 5, name: 'Ensaio sobre a cegueira', author: 'José Saramago'},
        {id: 6, name: 'Senhor das moscas', author: 'William Golding'},
        {id: 7, name: 'Revolução dos Bichos', author: 'George Orwell'},
        {id: 8, name: 'Admirável mundo novo', author: 'Aldous Huxley'}
    ]

    const renderItems = () => {
        return names.map((item) => (
            <TouchableOpacity
                key = {item.id}
                style = {styles.Button}
                onPress={() => alertItemName(item)}
            >
                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        ));
    };
    const alertItemName = (item) => {
        alert("Você selecionou o livro: " + item.name + "\ndo autor: " + item.author);
    }
    return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Livraria do Miguel Isack</Text>

                <Image style={styles.logo} source={require("../img/books-logo.png")}></Image>


                {renderItems()}
            </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
      marginTop: 35,
      flex: 1
    },
    Button: {
        padding: 16,
        marginTop: 3,
        backgroundColor: '#e6e39e',
        alignItems: 'center',
        borderBottomWidth: 7,
        borderBottomColor: '#bdbdbb',
        lineHeight: 10
    },

    title:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#313b70',
        
    },
   
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e919',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });
  