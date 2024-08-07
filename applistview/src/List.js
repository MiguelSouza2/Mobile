import React, {useState} from 'react';
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function List(){
    const names = [
        {id: 0, nome: 'Miguel Jusé'},
        {id: 1, nome: 'Aspas'},
        {id: 2, nome: 'Matheus Leme'},
        {id: 3, nome: 'VT'},
        {id: 4, nome: 'Zezilha'},
        {id: 5, nome: 'Smeagle (Deus o tenha)'},
        {id: 6, nome: 'Mario'},
        {id: 7, nome: 'Ramon'},
        {id: 8, nome: 'Professor Luizinho'}
    ]

    const renderItems = () => {
        return names.map((item) => (
            <TouchableOpacity
                key = {item.id}
                style = {styles.botao}
                onPress={() => alertItemName(item)}
            >
                <View style={styles.item}>
                    <Text style={styles.texto}>{item.nome}</Text>
                </View>
            </TouchableOpacity>
        ));
    };
    const alertItemName = (item) => {
        alert("Você clicou no nome \n" + item.nome);
    }
    return (
            <ScrollView contentContainerStyle={styles.container}>
                {renderItems()}
            </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
      marginTop: 35
    },
    botao: {
        padding: 16,
        marginTop: 3,
        backgroundColor: '#9384',
        alignItems: 'center',
        borderBottomWidth: 7,
        borderBottomColor: '#bdbdbb',
    },
   
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e919',
    }
  });
  