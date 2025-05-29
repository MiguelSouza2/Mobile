// Importa hooks do React para gerenciar estado e efeitos colaterais
import { useState, useEffect } from 'react';
// Importa componentes básicos do React Native para UI
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
// Importa a referência do banco de dados Firestore configurado
import { db } from './firebase.js';
// Importa funções do Firestore para interagir com a coleção 'messages'
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

// Define o componente funcional Chat
function Chat() {
  // Estado para armazenar a lista de mensagens recebidas do Firestore
  const [messages, setMessages] = useState([]);
  // Estado para armazenar o texto digitado pelo usuário
  const [input, setInput] = useState('');


  // Hook de efeito: roda apenas uma vez ao montar o componente (dependência [])
  useEffect(() => {
    // Cria uma query na coleção 'messages', ordenada por 'timestamp'
    const q = query(collection(db, 'messages'), orderBy('timestamp'));

    // onSnapshot: escuta em tempo real as mudanças na coleção 'messages'
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Atualiza o estado de mensagens com os documentos recebidos
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Cleanup: remove o listener quando o componente desmontar
    return () => unsubscribe();
  }, []);


    // Função para enviar uma nova mensagem
  const sendMessage = async () => {
    // Se o input estiver vazio, não faz nada
    if (!input) return;

    // Adiciona um novo documento à coleção 'messages'
    await addDoc(collection(db, 'messages'), {
      text: input, // conteúdo da mensagem
      timestamp: serverTimestamp() // timestamp gerado pelo servidor
    });

    // Limpa o campo de input após o envio
    setInput('');
  };


    // JSX: define a estrutura visual do componente
  return (
    <View style={{ padding: 20 }}>
      {/* Título do chat */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Chat em Tempo Real</Text>

      {/* Lista de mensagens com scroll */}
      <ScrollView style={{ marginVertical: 20, maxHeight: 300 }}>
        {messages.map(msg => (
          // Renderiza cada mensagem como um Text, usando o id como key
          <Text key={msg.id} style={{ marginVertical: 5 }}>{msg.text}</Text>
        ))}
      </ScrollView>

      {/* Campo de texto controlado */}
      <TextInput
        placeholder="Digite sua mensagem..."
        value={input}
        onChangeText={setInput}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10
        }}
      />

      {/* Botão para enviar mensagem */}
      <Button title="Enviar" onPress={sendMessage} />
    </View>
  );
}
